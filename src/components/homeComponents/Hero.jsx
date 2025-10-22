import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import profileImg from '../../assets/images/homeImages/profileImg.jpeg';

// ===== Styled Components =========
const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2, 0),
  },
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: '2.2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

const HeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: '500px',
  marginBottom: theme.spacing(4),
}));

const TechStalwarts = styled(Box)(({ theme }) => ({
  color: 'secondary.main',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'primary.main',
    textDecoration: 'underline',
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: '80%',
  height: '60%',
  borderRadius: '10%',
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
  [theme.breakpoints.up('md')]: {
    width: 530,
    height: 600,
    borderRadius: '50%',
  },
}));

// ========== Component ==========
export default function Hero() {
  return (
    <HeroContainer id="about">
      <Grid
        container
        spacing={10}
        sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* LEFT SIDE CONTENT */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="primary.main" sx={{ mb: 1 }}>
            Welcome to my portfolio!
          </Typography>

          <HeroHeading variant="h1">
            Hello, my <br /> self{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Shivank Singh.
            </Box>
          </HeroHeading>

          <HeroSubText variant="body1">
            I’m a full stack developer. Currently working with <br />
            <TechStalwarts
              component="a"
              href="https://techstalwarts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Techstalwarts
            </TechStalwarts>{' '}
            as a Software Developer.
          </HeroSubText>

          <Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary">
              Download CV
            </Button>
            <Button variant="outlined" color="primary">
              See my work →
            </Button>
          </Box>
        </Grid>

        {/* RIGHT SIDE IMAGE */}
        <Grid item xs={12} md={5}>
          <Box display="flex" justifyContent="center">
            <ProfileImage src={profileImg} alt="profile" />
          </Box>
        </Grid>
      </Grid>
    </HeroContainer>
  );
}
