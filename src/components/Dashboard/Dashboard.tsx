import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { ConnectKitButton, ConnectKitProvider } from 'connectkit';
import { useAccount } from "wagmi";

//import { useUser } from '../../UserContext';

import { Check } from '../../types';

// import { useContext as walletContext } from 'connectkit/build/components/ConnectKit';
// export type check = {
//   status: string | undefined;
//   date: string | undefined;
//   name: string | undefined;
//   payee: string | undefined;
//   postDate: string | undefined;
//   amount: string | undefined;
//   endorsed: boolean | undefined;
//   checkNumber: string | undefined;
// }

const Dashboard: React.FC = () => {
  const [endorsedList, setEndrosedList] = useState<Array<Check>>([])
  const [pendingList, setPendingList] = useState<Array<Check>>([])
  const [sentList, setSentList] = useState<Array<Check>>([])

  const testCheck: Check = {
    status: "endorsed",
    date: "0000000000",
    name: "Alice Human",
    payee: "Bob Hyuman",
    postDate: "00000000",
    amount: "512.00",
    endorsed: true,
    checkNumber: "12",
    memo: "Developing my LFGHO project!",
    address: "",
    payeeAddress: "",
  }

  // const walletProvider = walletContext();
  //walletProvider.
  const {address} = useAccount();
  const renderCheck = (check: Check) => {
    return (
      <div>
        <div className="check-status">Status: {check.status}</div>
        <div className="check-date">Date: {check.date}</div>
        <div className="check-name">Name: {check.name}</div>
        <div className="check-payee">Payee: {check.payee}</div>
        <div className="check-post-date">Post Date: {check.postDate}</div>
        <div className="check-amount">Amount: {check.amount}</div>
        <div className="check-endorsed">Endorsed: {check.endorsed ? 'Yes' : 'No'}</div>
        <div className="check-check-number">Check Number: {check.checkNumber}</div>
        <div className="check-check-memo">Memo: {check.memo}</div>
      </div>
    );
  };

  const renderCard = () => {
    return (
      <div className="nft-card">
        <div className="card-element1"></div>
      </div>
    )
  }

  const renderEndorsedChecks = (checks: Array<Check>) => {
    return <div>
      {renderCheck(testCheck)}
    </div>;
  };

  const renderPendingChecks = () => {
    return <div></div>;
  };

  const renderSentChecks = () => {
    return <div></div>;
  };

  useEffect(() => {
    // fetch current check cache (likely grpahql)
  }, [])

  return (
    <div className="dashboard">
      <div className="connect-button">
        <ConnectKitButton />
      </div>

      <div className="title">AAVE Checks</div>
      <div className="subtitle">AAVE Checks, powered by Family x AAVE GHO</div>
      <div className="subtitle">Make your money work for you!</div>
      <div className="subtitle"> Pay and endose checks/ invoices! All securly authenticated by an AAVE mediator!</div>
      <div className="account-details">
        <div className="account-balance">BALANCE  ${}  </div>
      </div>
      <div className="endorsed-checks-box">
        <div className="endorsed-check-header">Endorsed Checks</div>
        <div className="endorsed-check-table">Endorsed Checks History Loading ...
        <br/>
        {renderEndorsedChecks([])}
        </div>
        
      </div>
      <div className="pending-checks-box">
        <div className="pending-check-header">Pending Checks</div>
        <div className="pending-check-table">Pending Checks History Loading ...</div>
      </div>
      <div className="sent-checks-box">
        <div className="sent-check-header">Sent Checks</div>
        <div className="sent-check-table">Sent Checks History Loading ...</div>
        <div className="send-check">SEND A CHECK</div>
      </div>
    </div>
  );
};

export default Dashboard;
