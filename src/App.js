import './App.css';
import Kanban from './Kanban';

function App() {
  return (
    <div className="App">
      <div style={{textAlign:"center", justifyContent:"center" , marginLeft:"100px"}}>
        <h1 style={{color:"white"}}>Drag And Drop</h1>
        <Kanban />
      </div>    
    </div>
  );
}

export default App;
