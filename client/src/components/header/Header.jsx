
//state:
import { useState } from 'react';

// material ui:
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem,  styled} from '@mui/material';

import { Menu } from '@mui/icons-material'; //named import

import { Link } from 'react-router-dom';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';


//Changing Css of AppBar component: (AppBar component with Css of styledheader)
const StyledHeader = styled(AppBar)
`  
    background: #2874f0;
    height:55px; 
`;

//Changing Css of Box component: Later changed Box to Link(To enable routing)
const Component = styled(Link)
`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit
`;


//Changing Css of Typography component:
const SubHeading = styled(Typography)
`
    font-size:10px;
    font-style:italic;
`;

//change Css of img tag(which is a html tag, hence diff syntax; use '')
const PlusImage= styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled(Box)(( { theme }) => ({ 
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:
    {
        display:'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) =>({
    display:'none',
    [theme.breakpoints.down('md')]:
    {
        display: 'block'
    }
}));


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    // making a state: (open is a state which keeps track of drawer is open/close. Initially it will be closed, so pass false)
    const [open, setOpen] = useState(false);

    // handleOpen will make setOpen true:
    const handleOpen = () => {
        setOpen(true);
    }
    // handleClosewill make setOpen false:
    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                
            <MenuButton color="inherit" onClick={handleOpen}>
                <Menu />
            </MenuButton>

            <Drawer open= { open } onClose={ handleClose}>  {/* open, onClose are props of Drawer comp. */}
             {list()}
            </Drawer>  

                < Component to='/' >  {/* '/' will direct to home page */}

                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{display : 'flex'}}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>

                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>

            </Toolbar>
        </StyledHeader>
    )
}

export default Header