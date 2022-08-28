//For banner pictures:

//We use GRID component to make our application responsive:
import { Grid , styled } from "@mui/material";

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`;

const Image = styled('img')( ({ theme }) => ( {
    marginTop: '10',
    width: '100%' ,
    justifyContent: 'space-between',
    display: 'flex',
    //this css will bw applicable only on screen below medium down() is a function
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];



const MidSection = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <> 
        {/* //Parent (container) */}
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image =>(
                    //Child (item)
                    <Grid item lg={4} sm={4} md={4} xs={12}  >
                        <img src={image} alt="im" style={{ width: '100%' }}/>
                    </Grid>
                ))
            }
        </Wrapper>

        <Image src={url} alt="covid im" />

        </>
    )

}

export default MidSection;