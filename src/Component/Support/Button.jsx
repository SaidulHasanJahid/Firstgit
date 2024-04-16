import  './button.css';
import car from '../Support/image/car.png'
import bag from '../Support/image/shoping.png'
import Freedalyvery from '../Support/image/dalivery.png'
import HealpLine from '../Support/image/Healp line.png'
const Button = () => {
    return (
        <div className='allbutton'>
           <button className='button1'>
            <img src={car} alt="" className='car'/>
            <span>Cancellation && <br /> <p>Product Have A provlem</p></span>
           </button>
           <button className='button2'>
            <img src={bag} alt="" className='car'/>
            <span>Shoping fpr <br /> <p>Decount Heare </p></span>
           </button>
           <button className='button3'>
            <img src={Freedalyvery} alt="" className='car'/>
            <span>Free  Dalyvery <br /> <p>Heare</p></span>
           </button>
           <button className='button4'>
            <img src={HealpLine} alt="" className='car'/>
            <span>Any Time  <br /> <p>You Need</p></span>
           </button>
        </div>
    );
};

export default Button;