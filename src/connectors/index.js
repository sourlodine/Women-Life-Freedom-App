import { hooks as metamaskHooks, metaMask } from "./metaMask";
import { hooks as walletConnectHooks, walletConnect } from "./walletConnect";
import { hooks as coinbaseWalletHooks, coinbaseWallet } from "./coinbaseWallet";
import { network, hooks as networkHooks } from "./network";
import {
  walletConnectV2,
  hooks as walletConnectV2Hooks,
} from "./walletConnectV2";

// Return Connector Array for Passing Web3Provider
export const connectors = [
  [metaMask, metamaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

// Return Connector Object
export const connectorsObject = {
  metaMask: {
    connector: metaMask,
    hooks: metamaskHooks,
  },
  walletConnect: {
    connector: walletConnect,
    hooks: walletConnectHooks,
  },
  coinbaseWallet: {
    connector: coinbaseWallet,
    hooks: coinbaseWalletHooks,
  },
  network: {
    connector: network,
    hooks: networkHooks,
  },
  walletConnect2: {
    connector: walletConnectV2,
    hooks: walletConnectV2Hooks,
  },
};
