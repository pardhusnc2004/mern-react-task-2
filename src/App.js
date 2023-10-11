import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Calculator } from './components/calculator';
function App() {
  return (
    <div className="App align-items-center d-flex align-items-center flex justify-content-center" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
      <Calculator />
    </div>
  );
}

export default App;
