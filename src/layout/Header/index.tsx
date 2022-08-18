import // Box,
// AppBar,

// Container,
// IconButton,
// Menu,
// MenuItem,
// Toolbar,
// Tooltip,
// Typography,
// TextField,
'@mui/material';
// import { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { Box } from '@mui/system';
import React from 'react';
import { logo, searchLogo, MenuIcon } from '../../assets/Icons';

export const Header = () => {
  const pages = [
    'Фото',
    'Видео',
    'Заведение',
    'События',
    'Новости',
    'Контакты',
  ];

  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' />
        <div className='header__row'>
          <div className='header__row__navigation'>
            {pages.map((page) => (
              <a href='#' className='header__row__navigation_Nav' key={page}>
                {page}
              </a>
            ))}
          </div>
          <button className='header__row__button'>
            <img src={searchLogo} alt='' />
          </button>
        </div>
      </div>
      <label>
        <input type='checkbox' />
        <span className='menu'>
          {' '}
          <span className='hamburger'></span>{' '}
        </span>
        <ul>
          <li>
            {' '}
            <a href='#'>Фото</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Видео</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Заведение</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>События</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Новости</a>{' '}
          </li>
          <li>
            {' '}
            <a href='#'>Контакты</a>{' '}
          </li>
        </ul>
      </label>

      <div className='line'></div>
    </>
  );
};

export default Header;

//   <AppBar position='static'>
//     <Container maxWidth='xl'>
//       <Toolbar disableGutters>
//         <img className='logo' src={logo} />
//         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           {pages.map((page) => (
//             <Button
//               key={page}
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white' }}
//             >
//               {page}
//             </Button>
//           ))}
//         </Box>
//         <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//           <Button onClick={handleOpenSearch}>
//             <SearchLogo />
//           </Button>
//         </Box>
//         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//           <IconButton
//             size='large'
//             aria-controls='menu-appbar'
//             aria-haspopup='true'
//             onClick={handleOpenNavMenu}
//             color='inherit'
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id='menu-appbar'
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//             }}
//           >
//             <SearchLogo />
//             {pages.map((page) => (
//               <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Typography textAlign='center'>{page}</Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>
//       </Toolbar>
//     </Container>
//     <div className='line'></div>
//   </AppBar>
