import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
import GrapthData1 from './data/GraphData1'
import GrapthData2 from './data/GraphData2'
import GrapthData3 from './data/GraphData3'
import GrapthData4 from './data/GraphData4'

function App() {
  return (
    <div className="App">
      <div>
        <div><Graph data={GrapthData1} /></div>
        <div><Graph data={GrapthData2} /></div>
      </div>
      <div>
       <div><Graph data={GrapthData3} /></div>
       <div><Graph data={GrapthData4} /></div>
      </div>
    </div>
  );
}

export default App;
