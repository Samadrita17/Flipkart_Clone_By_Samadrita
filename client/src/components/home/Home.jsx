import { useEffect } from "react";


//components:

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import {Box,styled} from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";

//useDispatch: To dispatch reducer function(getProducts)
//useSelector: To extract vaues from store.
import {useDispatch, useSelector } from 'react-redux';

//this is to add background color behind every component under navbar
const Component= styled(Box)
`
 padding: 10px;
 background:#F2F2F2;
 
`

const Home = () =>
{
    //getProducts is {products:[{}, {},....]}
    //const {products} = getProducts; //object destructuring concept
    // products is all the data
    const {products} = useSelector(state => state.getProducts) //this getProducts is a reducer
    
    console.log(products);
    
    const dispatch = useDispatch();

    //useEffect(callback fun, when to call the fun) this grtProducts is a fun
    useEffect( ()=>{dispatch(getProducts())}, [dispatch] )

    return(
        <>
            <NavBar />
            <Component>
              <Banner />
              <MidSlide products={products} title="Deal of the day" timer={true} />
              <MidSection />
              <Slide products={products} title="Discounts for You" timer={false} />
              <Slide products={products} title="Suggesting Items" timer={false}/>
              <Slide products={products} title="Top Selection" timer={false} />
              <Slide products={products} title="Recommended Items" timer={false} />
              <Slide products={products} title="Trending Offers" timer={false} />
              <Slide products={products} title="Season's top picks" timer={false} />
              <Slide products={products} title="Top Deals On Accessories" timer={false} />

            </Component>

        </>
    )
}

export default Home;