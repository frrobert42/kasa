import './App.scss';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import House from "./pages/house/house";
import HousingJson from "./data/logements.json";

function App() {
    // if housing is not in local storage, add it
    if (!localStorage.getItem("housing")) {
        localStorage.setItem("housing", JSON.stringify(HousingJson));
    }
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/house/:id' element={<House />}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
