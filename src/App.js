import './App.css';
import TrackPage from './components/page_components/track_page';
import OverviewPage from './components/page_components/overview_page';

import React from 'react';
import { useState, useEffect } from 'react';

import { ClockCircleOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';

export default function App() {
  const [tabState, setTabState] = useState("Track")
  
  // Reacts to state change
  useEffect(() => {
    console.log(`Hello John <3, the current state is ${tabState}`)
  }, [tabState])

  // Changes tab state, loads selected page
  function switchTab(tab) {
    setTabState(tab)
  }

  function Page() {
    // Loads selected page
    if (tabState === "Track") {
      return <TrackPage/>
    }
    if (tabState === "Overview") {
      return <OverviewPage/>
    }
  }

  // Renders web app
  return (
    <body>
      <header>
        <div className="flex flex-row gap-1 m-1">
          <Tab tabName="Track" onClickTab={() => switchTab("Track")} state={tabState}/>
          <Tab tabName="Overview" onClickTab={() => switchTab("Overview")} state={tabState}/>
        </div>
        <hr className="border-black"/>
      </header>
      <main>
        <Page/>
      </main>
    </body>
  
  );
}

// Render each tab button
function Tab({tabName, onClickTab, state}) {
  // TODO: Figure out if there's a better way to do this (have a css class be dependant on something)
  // Active page
  if (state === tabName) {
    return (
      <button className="bg-gray-200 h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1.5" onClick={onClickTab}>
        <Icon iconDisplayed={tabName}/>
        <p>{tabName}</p>
      </button>
    );
  }

  // Inactive page
  else {
    return (
      <button className="h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1.5" onClick={onClickTab}>
        <Icon iconDisplayed={tabName}/>
        <p>{tabName}</p>
      </button>
    );
  }
  // Active button colour should be bg-grey-200
}

function Icon(props) {
  if (props.iconDisplayed === "Track") {
    return <ClockCircleOutlined/>
  }
  if (props.iconDisplayed === "Overview") {
    return <CalendarOutlined/>
  }
}