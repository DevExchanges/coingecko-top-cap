const axios = require('axios');
const log = require('devex-customize-logger')

async function getCryptoPrices(count) {
    try {
        // Fetch the top 5 cryptocurrencies by market capitalization
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: count,
                page: 1,
                sparkline: false,
            },
        });

        const cryptoData = response.data;

        // Display the cryptocurrency prices
        log.info(`Top ${count} Cryptocurrencies by Market Cap:`);
        cryptoData.forEach((crypto, index) => {
            log.info(`${index + 1}. ${crypto.name} (${crypto.symbol}): $${crypto.current_price}`);
        });
    } catch (error) {
        log.error('Error fetching cryptocurrency prices:', error.message);
    }
}

module.exports = { getCryptoPrices };
