import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constant";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setconnectedAccount] = useState("");
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const account = await ethereum.request({
        method: "eth_accounts",
      });
      if (account.length) {
        setconnectedAccount(account[0]);
        // Get All transactions
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      setconnectedAccount(account[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, connectedAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
