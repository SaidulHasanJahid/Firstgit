
import './Allcard.css'
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Shoping from '../Shoping/Shoping';

const Allcard = ({item}) => {
const {handelAddToCard} =Shoping();
    const {titel ,price,image,oldprice}=item;  
    return (
         <div className="Card">
      

        <Card sx={{ maxWidth: 345 }}>
      
            <Link to={`/frind/${item.id}`}>

            <div className="con">
            <CardContent>
              <img src={image} alt="" className='img'/>
              <Typography gutterBottom variant="h5" component="div" className='titel'>
                {titel}
              </Typography>
              <p className='new'>{price}<del className='old'>{oldprice}</del></p><span></span>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>

            </CardContent>
            </div>
              <Button size="small" className='buynow'>Buy Now</Button>
              
            </Link>
            <Button size="small" className='AddtoCard' onClick={handelAddToCard}   >Add to Card</Button>
            <CardActions>
          
            </CardActions>
        </Card>

        </div>
    );
};

export default Allcard;