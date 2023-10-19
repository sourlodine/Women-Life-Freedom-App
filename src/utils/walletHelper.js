import { Network } from "@web3-react/network";
import { MetaMask } from "@web3-react/metamask";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { connectorsObject } from "../connectors";

// Define All Wallet
export const wallets = {
  metamask: {
    id: 1,
    connector: MetaMask,
    connectWallet: connectorsObject?.metaMask,
  },
  walletConnect: {
    id: 2,
    connector: WalletConnect,
    connectWallet: connectorsObject?.walletConnect,
  },
  coinbase: {
    id: 3,
    connector: CoinbaseWallet,
    connectWallet: connectorsObject?.coinbaseWallet,
  },
  network: {
    id: 4,
    connector: Network,
    connectWallet: connectorsObject?.network,
  },
  walletConnect2: {
    id: 5,
    connector: WalletConnectV2,
    connectWallet: connectorsObject?.walletConnect2,
  },
};

export const CheckWallet = (connector) => {
  // Identify the connected wallet and store its ID in Local Storage

  const connectorInstant = Object.values(wallets).find((val) => {
    if (connector instanceof val?.connector) {
      return true;
    }
    return false;
  });

  if (connectorInstant) {
    localStorage.setItem("wallet", Number(connectorInstant?.id).toString());
  }
};

// Return Selected Wallet Hooks
export const SelectWalletHooks = () => {
  // Get Wallet Id from LocalStorage
  const walletId = localStorage.getItem("wallet");

  // Set the Hooks for getting Wallet Details
  const connectorInstant = Object.values(wallets).filter(
    (val) => val?.id === Number(walletId)
  );

  // By Default Connector Instant is undefined So we need to check Connector Instant Length
  if (connectorInstant?.length > 0) {
    return connectorInstant[0]?.connectWallet?.hooks;
  }

  return wallets?.metamask?.connectWallet?.hooks;
};
