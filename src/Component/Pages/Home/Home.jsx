import Breand from "../../Breand/Breand";
import SlaiderCard from "../../CardSlaider/Slaidercard";
import Shoping from "../../Shoping/Shoping";
import SlickSlider from "../../Slaider/Slaider";
import Button from "../../Support/Button";
import Listimage from "../../imagelist/listimage";

import './Home.css'

const Home = () => {
    return (

        <div>
            <h1>This is Home</h1>
            
            <SlickSlider />
            <Button />
            <Breand />
            <Listimage />
           
            <SlaiderCard />
            
            <Shoping />
        </div>
    );
};

export default Home;