import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import Contrac from "../Pages/Contact/Contrac";
import Error from "../Pages/Error/Error";
import Naver from "../Naver/Naver";
import Deatail from "../Pages/Detail/Deatail";
import Footer from "../Footer/Footer";


const Ro = () => {
    return (
        <div>
            <BrowserRouter > 
                <Naver />
                
                <Routes>
                    <Route path="/" element={<Home />}/>

                    <Route path="/frind/:frindid" element={<Deatail />} />
                    
                    {/* <Route path="/frind/:frindid" element={<Deatail />} /> */}

                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop" element={<Shop />}/>
                    <Route path="/contrac" element={<Contrac />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Ro