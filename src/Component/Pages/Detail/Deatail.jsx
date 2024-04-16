import { useParams } from "react-router-dom";
import Data from '../../../../public/data.json'
import './Deatile.css'
import { Rating } from "@mui/material";
const Deatail = () => {
    
    const { frindid }=useParams();
    const singleuser =Data.find((item)=> item.id == frindid)
    console.log(singleuser)


    return (
        <div>
          <div className="container">
            <div className="first">
                <h1>{singleuser.titel} </h1>
                <img src={singleuser.image} alt="" />
            </div>
            <div className="sec">
                <h1>Deatile </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam consequatur laboriosam eveniet qui. Quam dolores laudantium voluptates sapiente aspernatur, consectetur quis incidunt placeat! Praesentium exercitationem cum dolorum! Nemo, est fugit tenetur omnis aperiam ullam delectus dolorum repellat dolore beatae aliquid mollitia et neque eius minus ea enim voluptatibus corporis!</p>

                <h2>{singleuser.price} <del>{singleuser.oldprice}</del></h2> 

                    <h1><span>+</span><input type="number" /><span>-</span></h1>

                <div className="Button">
                <button className="btn1">Buy Now</button>
                <button className="btn2">Add To Card </button>
                
                </div>
                <Rating name="size-medium" defaultValue={2} />
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, sapiente!</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, sapiente!</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, sapiente!</li>
                </ul>
            </div>
          </div>

           
        </div>
    );
};

export default Deatail;