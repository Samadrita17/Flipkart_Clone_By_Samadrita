
import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';  //to change css: (To apply sliding affect)

import Countdown from 'react-countdown';  //Countdown:

import { Link } from "react-router-dom";  // Link: On click of product we can change routing

import { Box, Typography, Button, Divider, styled} from "@mui/material";


//This is prop: w/o tis ui will break
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component = styled(Box)`
  margin-top: 10px;
  background: #FFFFFF;

`;

const Deal = styled(Box)`
   padding: 15px 20px;
   display: flex
`;

const Timer = styled(Box)`
   display:flex;
   margin-left:10px;
   align-items: center;
   color: #7f7f7f;
`;
const DealText = styled(Typography)`
  font-size:22px;
  font-weight:600;
  margin-right:25px;
  line-height: 32px
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size:13 px
  font-weight:600
`;

const Image = styled('img')({
    width: 'auto',
    height: 150

});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;




//products is the data we'hv fetched(from store) using useSelector
// products, title and timer are props
const Slide = ({ products, title , timer})=>
{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    //using renderer we cn modify the way our countdown looks:
    const renderer = ({hours, minutes, seconds}) => {
        return <Box variant="span"> {hours} : {minutes} : {seconds} Left </Box>
    }

    return(
    <Component>
        <Deal>
            <DealText>{title}</DealText>
            {
                //if timer is true, only then show the timer on the slide:
                timer &&
                    <Timer>
                        <img src = {timerURL} alt = "timer" style={{width : 24}} />
                        <Countdown date={Date.now() + 5.04e+7 } renderer={renderer} />  {/* Countdown takes a date prop. 14hrs=5.04e+7 millisec */}
                    </Timer>
            }

            <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>

       </Deal>
        
       <Divider/>  
       

       <Carousel
            //props:
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true} //infinite
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                //loop products ( we will get access of individual products)
                products.map(product => (
                  //Link to will enable routing if path matches. Text decoration none because by def, Link underlines text
                  <Link to={`product/${product.id}`} style={{textDecoration: 'none' }}>

                    <Box textAlign="center"  style= {{ padding: '25px 15px' }}>
                        <Image src={product.url} alt="product" />
                        <Text style= {{ fontWeight: 600, color: '#212121' }} > {product.title.shortTitle} </Text>
                        <Text style= {{ color: 'green' }} > {product.price.discount} </Text>
                        <Text style= {{ color: '#212121' , opacity: '0.6' }} > {product.tagline} </Text>
                    </Box>

                  </Link>
                ))
            }
       </Carousel> 
    </Component>
    )
}

export default Slide; //import in Home.jsx