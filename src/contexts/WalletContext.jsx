import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
// import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { WalletConnect } from "@web3-react/walletconnect";
// import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

import { metaMask, hooks as metamaskHooks } from "../connectors/metaMask";
import { getAddChainParameters } from "../chains";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useENSNames,
  useProvider
} = metamaskHooks;


export const WalletContext = createContext({
  chainId: undefined,
  accounts: undefined,
  isActivating: false,
  isActive: false,
  provider: undefined,
  ENSNames: [],
  connector: metaMask,
  error: undefined,
  setError: () => { },
  desiredChainId: undefined,
  setDesiredChainId: () => { },
  handleConnect: () => { },
  handleDisconnect: () => { },
  handleSwitchChain: () => { },
});

export const WalletProvider = ({ children }) => {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);
  const [connector] = useState(metaMask);
  const [error, setError] = useState(undefined);
  const [desiredChainId, setDesiredChainId] = useState(
    undefined
  );

  const handleConnect = () => {
    handleSwitchChain(5);
  }

  const handleDisconnect = useCallback(() => {
    if (connector?.deactivate) {
      void connector.deactivate();
    } else {
      void connector.resetState();
    }
  }, [connector]);

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

  // function useBalances(
  // 	provider?: ReturnType<Web3ReactHooks['useProvider']>,
  // 	account?: string
  // ): BigNumber[] | undefined {
  // 	const [balance, setBalance] = useState<BigNumber | undefined>()

  // 	useEffect(() => {
  // 		if (provider && accounts?.length) {
  // 			let stale = false

  // 			void Promise.all((account) => provider.getBalance(account)).then((balance) => {
  // 				if (stale) return
  // 				setBalance(balance)
  // 			})

  // 			return () => {
  // 				stale = true
  // 				setBalance(undefined)
  // 			}
  // 		}
  // 	}, [provider, accounts])

  // 	return balance
  // }

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
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
