import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"
import About from "./components/About";
function App(){
    return (<div>
        <Navbar/>
        <HomePage/>
        <About/>
    </div>);
}
export default App;