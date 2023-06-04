import Icon from "./icon";

// Render each tab button
export default function Tab({tabName, onClickTab, state}) {
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
}