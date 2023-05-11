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
  contractName: "ArtemisTest",
  tokenName: "Artemis TEST",
  tokenSymbol: "ARTMSTEST",
  hiddenMetadataUri: 'ipfs://QmWGG79vwmpHAD54kETd35Ei4tipM2vnitnzHgdVPPeVYJ/hidden.json',
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
  contractAddress: "0x6D8eDA88F1d19c2eB191aF319c3cf0F8A8007F00",
  marketplaceIdentifier: "artemis-test",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
