import React from "react";

function TransactionCard({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  url,
  amount,
}) {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
  2xl:min-w-[450px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col p-3 rounded-md hover:shadow-2xl
  "
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex justify-start w-full mb-6 p-2">
          <a href={`https://rinkeby.etherscan.io/address/${addressFrom}`}></a>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;
