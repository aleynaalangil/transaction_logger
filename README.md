# Transaction Log Fetcher

This code snippet retrieves and displays the transaction logs from the Solana blockchain using a given transaction signature. It leverages the Solana Web3.js library to connect to the Solana mainnet-beta cluster and fetches the parsed transaction data.

## Prerequisites

- Node.js installed on your machine.
- NPM (Node Package Manager) installed.
- Internet connection to connect to the Solana mainnet-beta cluster.

## Setup

1. **Clone the repository or copy the code snippet:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install the required dependencies:**

   ```bash
   npm install @solana/web3.js
   ```

## Usage

1. **Replace the placeholder transaction signature with your own:**

   Edit the `transactionSignature` variable in the code snippet:

   ```javascript
   const transactionSignature = 'CmMd4o7H5vaC5FeuzUT1AW1rAZHhQWB6sfedUz54XhbbqGRVV5thjppjVxNK5pDzddSSf56HQXHy1MyB72rPthm';
   ```

2. **Run the script:**

   ```bash
   node index.js
   ```

## Code Overview

The script performs the following steps:

1. **Imports the Solana Web3.js library:**

   ```javascript
   const solanaWeb3 = require('@solana/web3.js');
   ```

2. **Connects to the Solana mainnet-beta cluster:**

   ```javascript
   const connection = new solanaWeb3.Connection(
     solanaWeb3.clusterApiUrl('mainnet-beta'),
     'confirmed',
   );
   ```

3. **Fetches the confirmed transaction using the provided signature:**

   ```javascript
   async function getTransactionLogs(signature) {
     try {
       const transaction = await connection.getParsedTransaction(signature, {
         maxSupportedTransactionVersion: 0
       });
   
       if (transaction) {
         console.log('Transaction:', transaction);
         const inners = transaction.meta.innerInstructions;
         console.log('Transaction inners:', inners);
       } else {
         console.log('Transaction not found');
       }
     } catch (error) {
       console.error('Error fetching transaction:', error);
     }
   }
   
   getTransactionLogs(transactionSignature);
   ```

4. **Logs the transaction details and inner instructions to the console:**

   If the transaction is found, the script logs the entire transaction object and the inner instructions to the console. Otherwise, it prints a message indicating that the transaction was not found.

## Example Output

The script outputs the transaction details and inner instructions in the following format:

```plaintext
Transaction: {
  blockTime: 1720469977,
  meta: { ... },
  slot: 276446073,
  transaction: { ... },
  version: 0
}
Transaction inners: [
  { index: 4, instructions: [Array] },
  { index: 5, instructions: [Array] },
  { index: 6, instructions: [Array] },
  { index: 7, instructions: [Array] },
  { index: 8, instructions: [Array] },
  { index: 9, instructions: [Array] }
]
```

## Notes

- Ensure you have a valid transaction signature to fetch the transaction logs.
- The `maxSupportedTransactionVersion` parameter is set to 0 to ensure compatibility with older transactions.

