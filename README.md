# 'Hostel Management' CLI Application

This project was generated with [Node.JS](https://nodejs.org/en) version 8.11.3

For Unit tests [Jest](https://www.npmjs.com/package/jest/v/25.0.0) version 25.0.0

Order Matching Engine

Implement an order matching system for a stock exchange.

Traders place Buy or Sell limit orders for a stock by providing the quantity and price.
These orders get entered into the exchange’s order book and remain there until they are matched.
The exchange follows a FirstInFirstOut Price-Time order-matching rule, which states: “The first order in the order book at a price level is the first order matched. All orders at the same price level are filled according to time priority”.
The exchange works like a market, lower selling prices and higher buying prices get priority.
A trade is executed when a buy price is higher than a selling price. The trade is recorded at the price of the sell order regardless of the price of the buy order


Sample Input Orders
(format:<order-id> <time> <symbol> <transaction type> <qty> <order-price>
#101 09:45 BTC sell 110 245.10
#202 09:45 BTC sell 80 236.45
#303 09:47 BTC buy 70 239.10
#501 09:48 BTC sell 220 242.50
#602 09:49 ETH buy 50 239.50
#701 09:52 BTC buy 10 1001.10
#801 10:01 BTC sell 20 240.10
#901 10:02 BTC buy 150 242.70


Sample Output
(format:<sell-order-id> <qty> <order-execution-price> <buy-order-id>)
#202 70 236.45 #303
#202 10 236.45 #701
  
  
## Requirements

* Node 8
* Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/MayankAgrawal94/Hostel-Management.git
cd Hostel-Management
```

```bash
npm install
```
## How to serve the application

Run `npm start`.

## How to run test

Run `npm test`.

## Further help

To get more help on the Node.js CLI/API go check out the [Node.js v8.11.3](https://nodejs.org/dist/latest-v8.x/docs/api).
