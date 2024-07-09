const solanaWeb3 = require('@solana/web3.js');

// Connect to a Solana cluster
const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl('mainnet-beta'),
    'confirmed',
);

// Replace with your transaction signature
const transactionSignature = 'CmMd4o7H5vaC5FeuzUT1AW1rAZHhQWB6sfedUz54XhbbqGRVV5thjppjVxNK5pDzddSSf56HQXHy1MyB72rPthm';

async function getTransactionLogs(signature) {
    try {
        // Fetch the confirmed transaction
        const transaction = await connection.getParsedTransaction(signature,
            {
                maxSupportedTransactionVersion: 0
            });

        if (transaction) {
            console.log('Transaction:', JSON.stringify(transaction, null, 2));

            // Logs are part of the meta field in the transaction object
            const inners = transaction.meta.innerInstructions;
            // console.log('Transaction inners:', JSON.stringify(inners, null, 2));
        } else {
            console.log('Transaction not found');
        }
    } catch (error) {
        console.error('Error fetching transaction:', error);
    }
}

getTransactionLogs(transactionSignature);
