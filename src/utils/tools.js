import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect as WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

export function getName(connector) {
  if (connector instanceof Network) return "Network";
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof GnosisSafe) return "Gnosis Safe";
  if (connector instanceof WalletConnect) return "WalletConnect";
  if (connector instanceof WalletConnectV2) return "WalletConnect V2";
  if (connector instanceof CoinbaseWallet) return "Coinbase Wallet";
  return "Unknown";
}

const easeInOutQuad = (t, b, c, d) => {
  let time = t;
  time /= d / 2;
  if (time < 1) {
    return (c / 2) * time * time + b;
  }
  time -= 1;
  return (-c / 2) * (time * (time - 2) - 1) + b;
};

export const scrollTo = (element, duration = 1000) => {
  const to = document.getElementById(element)?.offsetTop;
  const start = window.scrollY;
  const change = (to || 0) - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};

export function reportCoreWebVitals({ id, name, label, value }) {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  window.ga("send", "event", {
    eventCategory:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export const shortenAddress = (address = "", chars = 4) => {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
};
