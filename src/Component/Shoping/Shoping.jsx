import { useEffect, useState } from "react";
import Allcard from "../AllCard/Allcard";
import "./Shopin.css";
import Data from "../../../public/data.json";
import Skeletion from "./Skeletion/Skeletion";

import { DNA } from "react-loader-spinner";

const Shoping = () => {
  //Loade more Skeletion Addd
  const [Skeletionload, setSkeletionload] = useState(false);
  //Loademore Button
  const [load, setload] = useState(8);
  //Skeletion or spinner Card

  const [spanner, setSpanner] = useState(false);

  //Loade more
  const Showmore = () => {
    setSkeletionload(false);
    setTimeout(() => {
      setload((pevload) => pevload + 8);
      setSkeletionload(false);
    }, 1000);

    setSkeletionload(true);
  };

  //skeletion loade
  useEffect(() => {
    setSkeletionload(true);
    setTimeout(() => {
      setSkeletionload(false);
    }, 2000);
  }, []);

  //Loade more Skeletion Addd End

  //Skelition End
  const handelAddToCard = (item) => {
    console.log("click");
  };
  
  return (
    <div className="shopcontainer">
      <div className="Card-LoadMoreButton">
        {/* Button Condition */}
        {spanner ? (
          <div className="container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return <Skeletion />;
            })}
          </div>
        ) : (
          // AllCard Body
          <div className="container">
            {Data.slice(0, load).map((item) => {
              return (
                <Allcard
                  handelAddToCard={handelAddToCard}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
        )}
        {/*-----------------------
        Loade More Button
      --------------------- */}
        {
          handelAddToCard
        }
        {Skeletionload ? (
          <div className="loadeing">
            (
            <DNA
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            )
          </div>
        ) : (
          <button onClick={Showmore} className="lodmore">
            Loade More
          </button>
        )}

        {/*------------------------
            Add-To-Card
        --------------------- */}
      </div>
      <div className="Addtocard">
        <h2>Order Summery</h2>
        <hr />
        <h4>Add Prodect:</h4>
        <h4>Tex:</h4>
        <h4>Delevary:</h4>
        <hr />
        <h2 className="total">Total:</h2>
        <button className="reavew">See Order Reavew</button>
      </div>
    </div>
  );
};

export default Shoping;
