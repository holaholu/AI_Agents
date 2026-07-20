# filename: plot_nvidia_stock_price.py
import matplotlib.pyplot as plt
import pandas as pd

# Data from the previous fetch (paste the data between the triple quotes)
data_str = """
Date,Ticker,NVDA
2024-03-25,94.837875
2024-03-26,92.401093
2024-03-27,90.094086
2024-03-28,90.199905
2024-04-01,90.206894
2024-04-02,89.297478
2024-04-03,88.810318
2024-04-04,85.756592
2024-04-05,87.855965
2024-04-08,86.982468
2024-04-09,85.206535
2024-04-10,86.888641
2024-04-11,90.459457
2024-04-12,88.033661
2024-04-15,85.852440
2024-04-16,87.263985
2024-04-17,83.889824
2024-04-18,84.524734
2024-04-19,76.068375
2024-04-22,79.380630
"""

# Creating a DataFrame from the data string
data = pd.read_csv(pd.compat.StringIO(data_str))
data['Date'] = pd.to_datetime(data['Date'])
data.set_index('Date', inplace=True)

# Plotting the data
plt.figure(figsize=(10, 5))
plt.plot(data.index, data['NVDA'], marker='o', linestyle='-', color='b')
plt.title('Nvidia Stock Prices from March 23, 2024 to April 23, 2024')
plt.xlabel('Date')
plt.ylabel('Closing Price (USD)')
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()

# Display the plot
plt.show()