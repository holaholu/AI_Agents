# filename: fetch_nvda_stock_data.py
import yfinance as yf

def fetch_stock_data(ticker, start_date, end_date):
    # Fetch historical data from Yahoo Finance
    data = yf.Ticker(ticker)
    hist = data.history(start=start_date, end=end_date)
    return hist

# Define the parameters
ticker = "NVDA"  # Nvidia's stock symbol
start_date = "2024-03-23"
end_date = "2024-04-24"  # Including the end day

# Fetch the stock data
nvda_data = fetch_stock_data(ticker, start_date, end_date)
print(nvda_data)
