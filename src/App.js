import './App.scss';
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import House from "./pages/house/house";
import HousingJson from "./data/logements.json";

function App() {
    // If the housing is not in the local storage, add it
    if (!localStorage.getItem("housing")) {
        localStorage.setItem("housing", JSON.stringify(HousingJson));
    }
    // Set the title of the page
    document.title = "Kasa";

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/house/:id' element={<House />}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
