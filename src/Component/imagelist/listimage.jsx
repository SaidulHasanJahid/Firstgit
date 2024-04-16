import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './list.css'

export default function Listimage() {
  return (
    
    <Box sx={{ width: 500, height: 550,border:2 , padding:4,}}>
      <h1>To Day Hot Product..</h1>
      <ImageList variant="masonry" cols={2} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [

  {
    img: 'https://i.pinimg.com/564x/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.jpg',
    title: 'Books',
  },
  
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/men-shoes-design-template-62d9d24d84471a73407251692763638d.jpg?ts=1698318475'
  }
  
];