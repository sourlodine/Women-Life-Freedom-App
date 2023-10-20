import { createContext, useCallback, useContext, useState } from "react";
// import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { WalletConnect } from "@web3-react/walletconnect";
import { useWeb3React } from "@web3-react/core";
// import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

// connectors
import { metaMask } from "../connectors/metaMask";
import { coinbaseWallet } from "../connectors/coinbaseWallet";
import { walletConnect } from "../connectors/walletConnect";
import { walletConnectV2 } from "../connectors/walletConnectV2";

import {
  SelectWalletHooks,
  CheckWallet,
  getAddChainParameters,
} from "../utils";

export const WalletContext = createContext({
  chainId: undefined,
  accounts: undefined,
  isActivating: false,
  isActive: false,
  provider: undefined,
  ENSNames: [],
  connector: metaMask,
  error: undefined,
  setError: () => {},
  desiredChainId: undefined,
  setDesiredChainId: () => {},
  handleConnect: () => {},
  handleDisconnect: () => {},
  handleSwitchChain: () => {},
  metaMaskConnector: undefined,
  coinbaseConnector: undefined,
  trustwalletConnector: undefined,
  walletconnectConnector: undefined,
});

export const WalletProvider = ({ children }) => {
  const hook = SelectWalletHooks();
  const { connector } = useWeb3React();

  const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = hook;

  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);
  const [error, setError] = useState(undefined);
  const [desiredChainId, setDesiredChainId] = useState(undefined);

  // Wallet Activate Function
  const handleConnect = useCallback(
    (connector, networkId = 1) => {
      // Check Wallet Which is Connected and Set into the Local Storage
      try {
        CheckWallet(connector);
        connector.activate(networkId);
      } catch (error) {
        console.log(error);
      }
    },
    [connector, chainId, CheckWallet]
  );

  //Wallet Deactivate Function
  const handleDisconnect = useCallback(() => {
    // Check Deactivate Function is Present or Not in Connector
    //If Yes then Call It and If No then Call Reset State Function

    try {
      if (connector?.deactivate) {
        connector?.deactivate();
      } else {
        connector?.resetState();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSwitchChain = useCallback(
    async (desiredChainId) => {
      setDesiredChainId(desiredChainId);

      try {
        if (
          // If we're already connected to the desired chain, return
          desiredChainId === chainId ||
          // If they want to connect to the default chain and we're already connected, return
          (desiredChainId === -1 && chainId !== undefined)
        ) {
          setError(undefined);
          return;
        }

        if (desiredChainId === -1 || connector instanceof GnosisSafe) {
          await connector.activate();
        } else if (
          connector instanceof WalletConnectV2 ||
          connector instanceof WalletConnect ||
          connector instanceof Network
        ) {
          await connector.activate(desiredChainId);
        } else {
          await connector.activate(getAddChainParameters(desiredChainId));
        }

        setError(undefined);
      } catch (error) {
        setError(error);
      }
    },
    [connector, chainId, setError]
  );

  return (
    <WalletContext.Provider
      value={{
        chainId,
        accounts,
        isActivating,
        isActive,
        provider,
        ENSNames,
        connector,
        error,
        setError,
        desiredChainId,
        setDesiredChainId,
        handleConnect,
        handleDisconnect,
        handleSwitchChain,
        metaMaskConnector: metaMask,
        coinbaseConnector: coinbaseWallet,
        trustwalletConnector: walletConnect,
        walletconnectConnector: walletConnectV2,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
