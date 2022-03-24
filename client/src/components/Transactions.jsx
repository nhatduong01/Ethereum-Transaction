import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionsContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import { useFetch } from "../hooks/useFetch";
import TransactionCard from "./TransactionCard";
const Transactions = () => {
  const { connectedAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-20 py-20 px-4">
        {connectedAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {/* i here is a special character you cannot change i by index */}
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Transactions;
