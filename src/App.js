import './App.css';
import TrackPage from './components/page_components/track_page';
import OverviewPage from './components/page_components/overview_page';
import Tab from './components/tab';

import React from 'react';
import { useState, useEffect } from 'react';

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

  // Selected page component
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
      <main className="h-screen">
        <Page className="h-full"/>
      </main>
    </body>
  
  );
}