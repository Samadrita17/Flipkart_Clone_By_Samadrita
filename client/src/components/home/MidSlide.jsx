// we need to make MidSlide to make the first slide. since it has the advertisement section also

import Slide from './Slide';

import { Box , styled } from "@mui/material";

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box) (({ theme }) => ({ 
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }

}));


//Remove `` and use objects to use theme.breakpoints to make responsive.
const RightComponent = styled(Box) (({ theme }) => ({ 
    background: '#FFFFFF',
    padding: '5',
    marginTop: '10',
    marginLeft: '10',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    } 
}));


const MidSlide = ( { products, title, timer}) => 
{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>

            <LeftComponent>
                <Slide 
                    products={products} 
                    title={title}
                    timer={timer} 
                />
            </LeftComponent>
                
            <RightComponent>
                <img src = {adURL} alt = "ad"  style={{ width:217 } }/>
            </RightComponent>

        </Component>

    )

}

export default MidSlide;
//import in Home.jsx