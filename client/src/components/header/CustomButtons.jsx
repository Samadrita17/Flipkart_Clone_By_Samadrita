import {useState, useContext} from 'react';

import { Box, Button, Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

//components:
import LoginDialog from '../login/LoginDialog';

import Profile from './Profile';

const Wrapper = styled(Box) (({theme}) => ({ 

display: 'flex',
margin:'0 3% 0 auto', 
'& > button, & > p , &> div' : {
    marginRight: '40px',
    fontSize: '16px',
    alignItems: 'center',
},
[theme.breakpoints.down('md')] : {
    display: 'block'
}
}));

const Container = styled(Box)
`
    display:flex;
`

// const LoginButton = styled(Button)
// `
// color: #2874f0 ;
// background : #FFFFFF;
// text-transform: none;
// padding:5px 40px ;
// border-radius:2px;
// box-shadow: none;
// font-weight:600;
// height:32px;
// `

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const CustomButtons =() =>
{
    const[open, setOpen] =useState(false);

    const {account, setAccount} = useContext(DataContext);

    const openDialog = () =>{
        setOpen(true);
    }

    return (
        <Wrapper> 
            {
                account ? <Profile account={account}  setAccount={setAccount}/> :
                <LoginButton variant='contained' onClick={() => openDialog()}> Login  </LoginButton>
            }

            <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>

    )

}

export default CustomButtons;

