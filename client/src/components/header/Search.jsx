
// using useEffect, we can directly make a call to the API
import { useState, useEffect } from 'react';

import { InputBase, Box, List, ListItem ,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

//we need to get products also, to see if typed text matches any product
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';

//to open the product on clicking search result:
import { Link } from 'react-router-dom' ;

const SearchContainer = styled(Box)
`
background:#fff;
width: 38%;
border-radius:2px;
margin-left:10px;
display: flex;
`;

const InputSearchBase = styled(InputBase)
`
padding-left: 20px;
width:100%;
font-size:unset;
`;

const SearchIconWrapper = styled(Box)
`
color:blue;
padding:5px ;
display:flex;
`;

const ListWrapper = styled(List)`
    position: absolute;
    background: white;
    color: black;
    margin-top:36px;
`;


const Search = () => {

    //state to extract what text user has typed: (initially text is '')
    const [text, setText] = useState();
    const [ open, setOpen ] = useState(true);

    //function: (text that user has entered)
    const getText = (text) =>
    {
        setText(text);
        setOpen(false);
    }

    //get products:
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getProducts()) 
    }, [dispatch] );

    

    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder='Search for products,brands and more'
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>  
            {
                text &&
                    <ListWrapper >
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                                <ListItem>
                                    <Link
                                        to = {`/product/${product.id}`} //this will direct to the product
                                        style={{ textDecoration:'none', color:'inherit'}}
                                        onClick = {()=> setText('')}   // this will remove the search results
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;
