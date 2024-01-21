import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { ConnectKitButton, ConnectKitProvider } from 'connectkit';
import { useAccount } from 'wagmi';

//import { useUser } from '../../UserContext';

import { Check } from '../../types';

import SendModal from '../FormModal/FormModal';

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
  const [endorsedList, setEndrosedList] = useState<Array<Check>>([]);
  const [pendingList, setPendingList] = useState<Array<Check>>([]);
  const [sentList, setSentList] = useState<Array<Check>>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const sendModal = () => {
    return (
      <div className="send-modal">
        <div></div>
        <div className="modal-status">: "endorsed",</div>
        <div className="modal-date">: "0000000000",</div>
        <div className="modal-name">: "Alice Human",</div>
        <div className="modal-payee">: "Bob Hyuman",</div>
        <div className="modal-postDate">: "00000000",</div>
        <div className="modal-amount">: "512.00",</div>
        <div className="modal-endorsed">: true,</div>
        <div className="modal-checkNumber">: "12",</div>
        <div className="modal-memo">: "Developing my LFGHO project!",</div>
        <div className="modal-address">: "",</div>
        <div className="modal-payeeAddress">: "",</div>
      </div>
    );
  };

  const testCheck: Check = {
    status: 'endorsed',
    date: '0000000000',
    name: 'Alice Human',
    payee: 'Bob Hyuman',
    postDate: '00000000',
    amount: '512.00',
    endorsed: true,
    checkNumber: '12',
    memo: 'Developing my LFGHO project!',
    address: '',
    payeeAddress: '',
  };

  const testCheck2: Check = {
    status: 'endorsed',
    date: '0000000000',
    name: 'Alice Human',
    payee: 'Bob Hyuman',
    postDate: '00000000',
    amount: '512.00',
    endorsed: true,
    checkNumber: '13',
    memo: 'Developing my LFGHO project!',
    address: '',
    payeeAddress: '',
  };

  const testCheck3: Check = {
    status: 'pending',
    date: '0000000000',
    name: 'Alice Human',
    payee: 'Bob Hyuman',
    postDate: '00000000',
    amount: '512.00',
    endorsed: true,
    checkNumber: '12',
    memo: 'Developing my LFGHO project!',
    address: '',
    payeeAddress: '',
  };

  const testChecks: Array<Check> = [testCheck, testCheck2];

  const testChecks2: Array<Check> = [testCheck3];

  useEffect(() => {
    setEndrosedList(testChecks);
    setPendingList(testChecks2);
  }, [testChecks, testChecks2]);

  // const walletProvider = walletContext();
  //walletProvider.
  const { address } = useAccount();
  const renderCheck = (check: Check) => {
    return (
      <div className="check-container">
        <div className="check-header">
          <div className="check-check-number">Check Number: {check.checkNumber}</div>
          <div className="check-endorsed">Endorsed: {check.endorsed ? 'Yes' : 'No'}</div>
          <div className="check-post-date">Post Date: {check.postDate}</div>
        </div>
        <div className="check-middle">
          <div className="check-amount">Amount: {check.amount}</div>
          <div className="check-payee">Payee: {check.payee}</div>
          <div className="check-date">Date: {check.date}</div>
        </div>
        <div className="check-footer">
          <div className="check-memo">Memo: {check.memo}</div>
        </div>
      </div>
    );
  };

  const renderCheck2 = (check: Check) => {
    return (
      <div className="check-container">
        <div className="check-header">
          <div className="check-check-number">Check Number: {check.checkNumber}</div>
          <div className="check-endorsed">Endorsed: {check.endorsed ? 'Yes' : 'No'}</div>
          <div className="check-post-date">Post Date: {check.postDate}</div>
        </div>
        <div className="check-middle">
          <div className="check-amount">Amount: {check.amount}</div>
          <div className="check-payee">Payee: {check.payee}</div>
          <div className="check-date">Date: {check.date}</div>
        </div>
        <div className="check-footer">
          <div className="check-memo">Memo: {check.memo}</div>
          <button className="check-endorse" onClick={() => handleEndorse(check)}>
            ENDORSE
          </button>
        </div>
      </div>
    );
  };
  

  const handleEndorse = (check: Check) => {
    console.log(`processing ${check}`);
  }

  const renderCard = () => {
    return (
      <div className="nft-card">
        <div className="card-element1"></div>
      </div>
    );
  };

  const renderEndorsedChecks = (checks: Array<Check> | undefined) => {
    if (checks === undefined) {
      return <div>Endorsed Checks History Loading...</div>;
    }

    if (checks.length === 0) {
      return <div>No Endorsed Checks Found</div>;
    }

    return (
      <div>
        {checks.map((check, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#dadada' : '#ededed',
              padding: '10px',
            }}
          >
            {renderCheck(check)}
          </div>
        ))}
      </div>
    );
  };

  const renderPendingChecks = (checks: Array<Check> | undefined) => {
    if (checks === undefined) {
      return <div>Pending Checks History Loading...</div>;
    }

    if (checks.length === 0) {
      return <div>No Pending Checks Found</div>;
    }

    return (
      <div>
        {checks.map((check, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#dadada' : '#ededed',
              padding: '10px',
            }}
          >
            {renderCheck2(check)}
          </div>
        ))}
      </div>
    );
  };

  const renderSentChecks = (checks: Array<Check> | undefined) => {
    if (checks === undefined) {
      return <div>Sent Checks History Loading...</div>;
    }

    if (checks.length === 0) {
      return <div>No Sent Checks Found</div>;
    }

    return (
      <div>
        {checks.map((check, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#dadada' : '#ededed',
              padding: '10px',
            }}
          >
            {renderCheck(check)}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    // fetch current check cache (likely grpahql)
  }, []);

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
        <div className="account-balance">BALANCE ${} </div>
      </div>
      <div className="endorsed-checks-box">
        <div className="endorsed-check-header">Endorsed Checks</div>
        <div className="endorsed-check-table">{renderEndorsedChecks(endorsedList)}</div>
      </div>
      <div className="pending-checks-box">
        <div className="pending-check-header">Pending Checks</div>
        <div className="pending-check-table">{renderPendingChecks(pendingList)}</div>
      </div>
      <div className="sent-checks-box">
        <div className="sent-check-header">Sent Checks</div>
        <div className="sent-check-table">{renderSentChecks(sentList)}</div>
        <div className="send-check" onClick={openModal}>
          SEND A CHECK
        </div>
      </div>
      {isModalOpen && <SendModal onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
