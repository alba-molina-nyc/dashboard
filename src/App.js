import Sidebar from './components/Sidebar';
import Board from './components/Board';
import Square from './components/Square';
import Name from './components/Name';
import './App.css';

function App() {
  return ( 
  <div> 
    <Sidebar />
    <div className="App-name-container">
    <div className="App-single-container1">
    <Name whichName="Reviews" /> 
    </div>
    <div className="App-single-container2">
    <Name whichName="Average Rating" /> 
    </div>
    <div className="App-single-container3">
    <Name whichName="Sentimental Analysis" />  
    </div>
    </div>
    <Square />
    <Board />
  </div>
  );
 
}
export default App;
