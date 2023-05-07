import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "SayMilady",
  tokenName: "Say Milady",
  tokenSymbol: "SAYMILADY",
  hiddenMetadataUri: 'ipfs://QmaYvHyzLgTMNSv8ULiuCAstgQcuWAmUdzj8ryCkKdRU2W/hidden.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.025,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x91866CA0a6cFE52e350117baD18D465B57D5cD01",
  marketplaceIdentifier: "say-milady",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
