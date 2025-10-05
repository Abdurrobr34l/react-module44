import React, { createContext, useState } from "react";
import GrandFather from "./familyMembers/GrandFather";
import Dad from "./familyMembers/Dad";
import Uncle from "./familyMembers/Uncle";
import Aunt from "./familyMembers/Aunt";

export const MoneyContext = createContext(0);

const FamilyTree = () => {

  const [money, setMoney] = useState(0)

  return (
    <div>
      <h2 className="title">Family Tree</h2>

<h5>Total family money: {money}</h5>
      <MoneyContext value={[money, setMoney]}>
        <GrandFather></GrandFather>
        <section className="childrens">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunt></Aunt>
        </section>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
