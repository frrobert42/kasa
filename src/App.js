import './App.scss';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import House from "./pages/house/house";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/house/:id' element={<House/>}/>
                <Route path="house/" element={<NotFound/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
