// Check if Web3 is injected (MetaMask, etc.)
window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        // Use Web3 with the user's current Ethereum provider (e.g., MetaMask)
        const web3 = new Web3(window.ethereum);

        // Handle "Connect Wallet" button click
        document.getElementById('connect-wallet').addEventListener('click', async function() {
            try {
                // Request accounts from MetaMask
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const userAddress = accounts[0];
                alert('Connected with address: ' + userAddress);

                // Proceed to interact with the smart contract (Pre-Sale logic can go here)
                // Example: Interact with the contract for the pre-sale
                // const contract = new web3.eth.Contract(abi, contractAddress);
                // await contract.methods.buyTokens().send({ from: userAddress, value: web3.utils.toWei('0.1', 'ether') });
            } catch (error) {
                console.error('User denied wallet connection');
            }
        });
    } else {
        alert('Please install MetaMask to connect your wallet!');
    }
});
