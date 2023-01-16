import "./App.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Member from "./components/Membership/Member";
import WeHire from "./components/WeHire/WeHire";
import Vetting from "./components/Vetting/Vetting";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

import { hireData } from "./hireData";
import { vettingData } from "./vettingData";
import { personData } from "./personData";
import { createContext, useState } from "react";
import Companies from "./components/Companies/Companies";
import Person from "./components/Persons/Person";

export const Context = createContext();

function App() {
  const [person, setPerson] = useState({
    List: personData,
    setList: [],
  });
  const addList = (list) =>
    setPerson({
      ...person,
      setList: person.setList.find((item) => item.id === list.id)
        ? person.setList.map((item) =>
            item.id === list.id ? { ...item, count: item.count - 1 } : {}
          )
        : [...person.setList, { ...list, count: 1 }],
    });
  return (
    <Context.Provider
      value={{
        hireData: hireData,
        vettingData: vettingData,
        persons: person,
        addList,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Member />
          <WeHire />
          <Vetting />
          <Companies />
          <Person />
          <Faq />
          <Footer/>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
