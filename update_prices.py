"""
Fetches current stock prices for every ticker held by any firm on
the VC Firm Tracker website, and saves them to prices.json.

The ticker list is NOT hand-maintained - it's extracted automatically
from scripts/data.js every run by scanning for `ticker: "XXX"`
fields. This means adding a new firm with a new public holding just
works the next time this runs; there's no separate list to remember
to update, and it can never silently drift out of sync with the
site's actual data the way the old hardcoded list did.

This runs automatically once a day via GitHub Actions - see
.github/workflows/update_prices.yml for the schedule.
"""

import json
import re
from datetime import date
import yfinance as yf

DATA_JS_PATH = "scripts/data-firms.js"


def get_all_tickers():
    """Extracts every unique ticker symbol referenced anywhere in
    data.js (every firm holding's `ticker: "XXX"` field). Holdings
    with `ticker: null` are automatically skipped, since null has no
    quoted value for the pattern to match."""
    with open(DATA_JS_PATH, "r") as f:
        content = f.read()
    tickers = set(re.findall(r'ticker:\s*"([A-Z0-9.]+)"', content))
    return sorted(tickers)


def fetch_prices(tickers):
    prices = {}
    for ticker in tickers:
        try:
            stock = yf.Ticker(ticker)
            # fast_info is quicker and more reliable than .info
            price = stock.fast_info["last_price"]
            prices[ticker] = round(float(price), 2)
            print(f"{ticker}: ${prices[ticker]}")
        except Exception as e:
            print(f"Could not fetch {ticker}: {e}")
            # Skip it - the website will keep showing the last known
            # good price for this ticker if we don't overwrite it
    return prices


def main():
    tickers = get_all_tickers()
    print(f"Found {len(tickers)} unique tickers in {DATA_JS_PATH}\n")

    # Load the existing file so any tickers that failed to fetch
    # today keep their last known price instead of disappearing
    try:
        with open("prices.json", "r") as f:
            existing = json.load(f)
    except FileNotFoundError:
        existing = {}

    new_prices = fetch_prices(tickers)
    existing.update(new_prices)
    existing["last_updated"] = str(date.today())

    with open("prices.json", "w") as f:
        json.dump(existing, f, indent=2)

    print(f"\nSaved {len(new_prices)} of {len(tickers)} prices to prices.json")


if __name__ == "__main__":
    main()
