import './App.css';
import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState("Track")
  useEffect(()=>{
    console.log(`Hello John <3, the current state is ${state}`)
  }, [state])

  return (
    <header className="flex flex-row gap-1 mt-1 ml-1">
      <Tab text="Track"/>
      <Tab text="Overview"/>
      <hr className="border-black"/>
      <button onClick={()=>{
        setState("Overview")
      }} >Hello</button>
    </header>
  );
}

function Tab({text}) {
  return (
    <div className="bg-gray-200 h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1.5">
      <ClockCircleOutlined/>
      <p>{text}</p>
    </div>
  );
}
