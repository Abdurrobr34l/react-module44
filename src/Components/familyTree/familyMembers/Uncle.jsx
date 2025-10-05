import React, { useContext } from 'react';
import { MoneyContext } from '../FamilyTree';

const Uncle = () => {

  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2 className="title children">UNCLE</h2>
      <button onClick={() => setMoney(money + 1000)}>Add 1000tk</button>
    </div>
  );
};

export default Uncle;