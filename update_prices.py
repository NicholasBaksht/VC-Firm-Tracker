"""
Fetches current stock prices for every ticker used on the VC Firm
Tracker website, and saves them to prices.json.

This runs automatically once a day via GitHub Actions - see
.github/workflows/update_prices.yml for the schedule.
"""

import json
from datetime import date
import yfinance as yf

# Every ticker that appears anywhere on the site
TICKERS = [
    "ABNB", "COIN", "NVDA", "DASH", "SHOP", "DOCU", "HUBS", "IOT",
    "FIG", "CART", "HOOD", "WDAY", "JD", "SNAP", "AFRM", "META",
    "ETSY", "PLTR", "SPCX", "PINS", "TWLO", "UBER", "XYZ",
]


def fetch_prices():
    prices = {}
    for ticker in TICKERS:
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
    # Load the existing file so any tickers that failed to fetch
    # today keep their last known price instead of disappearing
    try:
        with open("prices.json", "r") as f:
            existing = json.load(f)
    except FileNotFoundError:
        existing = {}

    new_prices = fetch_prices()
    existing.update(new_prices)
    existing["last_updated"] = str(date.today())

    with open("prices.json", "w") as f:
        json.dump(existing, f, indent=2)

    print(f"\nSaved {len(new_prices)} prices to prices.json")


if __name__ == "__main__":
    main()
