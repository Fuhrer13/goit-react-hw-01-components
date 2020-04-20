import React from 'react';
import Profile from './Components/Profile/Profile';
import user from './Database/user.json';
import Statistics from './Components/Statistics/Statistics';
import statisticalData from './Database/statistical-data.json';
import FriendList from './Components/FriendList/FriendList';
import friends from './Database/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './Database/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
