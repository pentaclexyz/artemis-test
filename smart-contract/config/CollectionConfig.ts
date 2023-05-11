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
  maxSupply: 20,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.025,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xBD3e5294d73DBe24e6CF55FD809843dCc6E0bd82",
  marketplaceIdentifier: "artemis-test",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
