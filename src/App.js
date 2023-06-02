import './App.css';
import { ClockCircleOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [tabState, setTabState] = useState("Track")
  
  useEffect(() => {
    console.log(`Hello John <3, the current state is ${tabState}`)
  }, [tabState])

  function switchTab(tab) {
    setTabState(tab)
  }

  return (
    <header>
      <div className="flex flex-row gap-1 m-1">
        <Tab tabName="Track" onClickTab={() => switchTab("Track")}/>
        <Tab tabName="Overview" onClickTab={() => switchTab("Overview")}/>
      </div>
      <hr className="border-black"/>
    </header>
  );
}

function Tab({tabName, onClickTab}) {
  // Active button colour should be bg-grey-200

  return (
    <button className="hover:bg-blue-100 h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1.5" onClick={onClickTab}>
      <Icon iconDisplayed={tabName}/>
      <p>{tabName}</p>
    </button>
  );
  }

function Icon(props) {
  if (props.iconDisplayed === "Track") {
    return <ClockCircleOutlined/>
  }
  if (props.iconDisplayed === "Overview") {
    return <CalendarOutlined/>
  }
}