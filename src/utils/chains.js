function isExtendedChainInformation(chainInformation) {
  return !!chainInformation.nativeCurrency;
}

export function getAddChainParameters(chainId) {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

const getInfuraUrlFor = (network) =>
  process.env.infuraKey
    ? `https://${network}.infura.io/v3/${process.env.infuraKey}`
    : "";
const getAlchemyUrlFor = (network) =>
  process.env.alchemyKey
    ? `https://${network}.alchemyapi.io/v2/${process.env.alchemyKey}`
    : "";

export const MAINNET_CHAINS = {
  1: {
    urls: [
      getInfuraUrlFor("mainnet"),
      getAlchemyUrlFor("eth-mainnet"),
      "https://cloudflare-eth.com",
    ].filter(Boolean),
    name: "Mainnet",
  },
};

export const TESTNET_CHAINS = {
  5: {
    urls: [getInfuraUrlFor("goerli")].filter(Boolean),
    name: "Görli",
  },
};

export const CHAINS = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};

export const URLS = Object.keys(CHAINS).reduce((accumulator, chainId) => {
  const validURLs = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
