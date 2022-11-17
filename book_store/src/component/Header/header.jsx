import React from 'react'
// import './Header.css'
// import education from '../../Assets/education.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Wishlistpage from '../Wishlist/wishlist';
import { useNavigate } from 'react-router-dom';






function Header(props) {


    const Navigate = useNavigate()

    const onWishlistClick = () => {
        Navigate('/wishlist')
    }
    const onCart = () => {
        Navigate('/cart')
      }

      const searchBooks = (event) => {
        props.showSearchedBooks(event.target.value);
    }
      

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
           
        },
    }));

   

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
  

   

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{ backgroundColor: '#A03037' }}>
                <Toolbar>
                    <img src='images/education.png' style={{ position: 'relative', left: '70px' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', color: 'White' }, position: 'relative', left: '80px' }}
                    >
                        Bookstore
                    </Typography>
                    <Search sx={{ position: "relative", left: "160px", height: "40px",background:"white", cursor: "pointer",width:"550px" }}  >
                        
                            <SearchIcon sx={{ position: "relative", right: "240px", height: "40px", color:"grey"}} />
                   
                        <StyledInputBase sx={{ width: "600px", height: "39px", position: "relative",left:"10px", bottom: "45px",color:"grey"}}
                           type="text"
                            placeholder="Search…"
                           
    
                            onChange={searchBooks}
                           
                        />
                        
                    </Search>



                    <PersonOutlineOutlinedIcon sx={{ position: 'relative', left: '350px' }} />

                    <ShoppingCartOutlinedIcon  sx={{ position: 'relative', left: '400px' }} onClick={onCart} />
                   <LocalMallOutlinedIcon  sx={{ position: 'relative', left: '450px' }} onClick={onWishlistClick}/> 





                </Toolbar>
            </AppBar>

        </Box>
    )
}


export default Header

