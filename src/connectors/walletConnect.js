import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

import { URLS } from "../utils/chains";

export const [walletConnect, hooks] = initializeConnector(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS,
      },
    })
);
