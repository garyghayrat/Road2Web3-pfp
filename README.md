# Setup in Local Environment

## Clone and cd into directory

    git clone https://github.com/garyghayrat/Road2Web3-pfp.git
    
    cd Road2Web3-pfp
    
    npm install
    
## Create a .env file in the root of the project

    touch .env
    
## Add the following data to .env

    PRIVATE_KEY=<Metamask private key>
    POLYGON_URL=<full Alchemy endpoint URL>
    
## Compiling contracts

    npx hardhat compile
    
## Deploy contracts locally

    npx hardhat run scripts/deploy.js
    
## Deploy to Polygon Mumbai testnet

    npx hardhat run scripts/deploy.js --network mumbai
    
    
# Additional Resources

Faucet: https://faucet.polygon.technology/

Polygon Mumbai testnet RPC setup: https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/

Open an Alchemy account to acquire an Alchemy Mumbai Polygon: https://www.alchemy.com/
    
    


    
    
