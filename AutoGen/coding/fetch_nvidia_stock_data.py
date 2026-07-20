# filename: fetch_nvidia_stock_data.py
import yfinance as yf
import pandas as pd

def fetch_stock_data(stock_symbol, start_date, end_date):
    stock_data = yf.download(stock_symbol, start=start_date, end=end_date)
    return stock_data['Close']  # Returning only the closing prices

nvidia_stock_symbol = "NVDA"
start_date = "2024-03-23"
end_date = "2024-04-23"

# Fetching the stock data
nvidia_stock_prices = fetch_stock_data(nvidia_stock_symbol, start_date, end_date)

# Printing the stock prices for review
print(nvidia_stock_prices)
