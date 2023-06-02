import './App.css';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <header className="flex flex-row gap-1 mt-1 ml-1">
      <Tab/>
      <Tab/>
      <hr className="border-black"/>
    </header>
  );
}

function Tab() {
  return (
    <div className="bg-gray-200 h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1.5">
      <ClockCircleOutlined/>
      <p>Track</p>
    </div>
  );
}
