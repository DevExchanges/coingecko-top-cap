# Crypto Price App

This Node.js application fetches and displays the current prices of the top  cryptocurrencies by market capitalization using the CoinGecko API.

## Getting Started

Follow these steps to run the crypto price app on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

### Installation
```bash
   npm install coingecko-top-cap
```
# Usage
```javascript
// Import
const topCap = require('coingecko-top-cap');

topCap.getCryptoPrices(10); // or any number you want
```
# License
This project is licensed under the MIT License - see the LICENSE file for details.