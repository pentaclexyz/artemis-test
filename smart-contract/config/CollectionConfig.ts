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
  hiddenMetadataUri:
    "ipfs://QmaYvHyzLgTMNSv8ULiuCAstgQcuWAmUdzj8ryCkKdRU2W/hidden.json",
  maxSupply: 5000,
  whitelistSale: {
    price: 0.023,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.023,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.028,
    maxMintAmountPerTx: 20,
  },
  contractAddress: null,
  marketplaceIdentifier: "say-milady",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
