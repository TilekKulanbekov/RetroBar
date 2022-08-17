import { AppBar, Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { LogoRetro } from '../../assets/Icons';

export const Header = () => {
  const pages = ['Products', 'Pricing', 'Blog'];

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <LogoRetro />
          <Box
            sx={{
              width: 'auto',

              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
