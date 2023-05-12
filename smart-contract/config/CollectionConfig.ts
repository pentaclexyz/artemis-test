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
  contractName: "ArtemisDollsTest",
  tokenName: "Artemis Dolls",
  tokenSymbol: "ARTMSDOLLS",
  hiddenMetadataUri: 'ipfs://QmWCAzRPK2CKWWLmTrXNSQCru2ge7v2Pyr2o2w76etTx4Z/hidden.json',
  maxSupply: 12,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0xab4a6a4b2e66a4817524a6468032c43817428fd1",
  marketplaceIdentifier: "artemis-dolls",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
