

import { useEffect } from "react";             //call using redux (as component is loaded, call)

import { useDispatch, useSelector } from "react-redux";     //
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";  //to extract anything from URL (it is a custom hook)
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

import { Box, Grid, styled} from "@mui/material";

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)`
    background: #FFFFFF;
    display: flex;

`;

const RightContainer = styled(Grid)`
    margin-top: 50px;
`;


const DetailView = () =>
{
    const dispatch = useDispatch();
    // in App.js, id is taken as a variable
    const { id } = useParams();

    //useSelector is used to extract values from redux
    const { loading, product } = useSelector(state => state.getProductDetails);

    //useEffect takes 2 args: (callback fun, when to call)
    useEffect( () => { if(product && id!==product.id) dispatch( getProductDetails(id) )}  , 
                        [dispatch , id, product, loading  ] )


    console.log(product);

    return(
       <Component>
           {
            product && Object.keys(product).length &&

                <Container container>

                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>

                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product ={product} />
                    </RightContainer>

                </Container>
                
           }
       </Component>
    )
}

export default DetailView; //import in App.js



// const DetailView = () => { 

//     const dispatch = useDispatch();
//     const { id } = useParams();

//     useEffect(()=>{
//         dispatch(getProductDetails( id ))

//     }, [dispatch, id] )



// return(
//     <div>Hello</div>
// )
// }

// export default DetailView;