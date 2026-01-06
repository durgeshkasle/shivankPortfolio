import React from 'react';
import { useNavigate } from 'react-router-dom';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { keyframes, useTheme, styled } from '@mui/material/styles';

// Simple typewriter hook
function useTypewriter(words = [], speed = 120, pause = 1400) {
  const [text, setText] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = words[wordIndex % words.length];
    const id = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === full) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex]);

  return text;
}

const BlinkingLabel = styled(Typography)(({ theme }) => {
  const blinkGlow = keyframes`
    0% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
    50% {
      box-shadow: 0 0 15px ${theme.palette.primary.main},
                  0 0 30px ${theme.palette.primary.main},
                  0 0 45px ${theme.palette.primary.main};
    }
    100% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
  `;

  return {
    display: 'inline-block',
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    marginBottom: theme.spacing(2),
    animation: `${blinkGlow} 2s infinite ease-in-out`,
  };
});

// ======= Styled Components =========
const StatsCard = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: 24,
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: '24px 28px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
    border: `1px solid ${theme.palette.primary.light}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
  },
}));

const GradientIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 16,
  background: `linear-gradient(135deg, ${theme.palette.success.light}, ${theme.palette.primary.light})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontWeight: 700,
  fontSize: 22,
  flexShrink: 0,
}));

const SkillRow = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 25,
}));

const ProgressBar = styled('div')(({ theme, value = 0, gradient }) => ({
  height: 10,
  borderRadius: 10,
  background: 'rgba(255,255,255,0.06)',
  overflow: 'hidden',
  marginTop: 6,
  marginBottom: 12,
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    height: '100%',
    width: `${Math.max(0, Math.min(100, value))}%`,
    background:
      gradient ||
      `linear-gradient(90deg, ${theme.palette.success.light}, ${theme.palette.primary.light})`,
    borderRadius: 10,
    transition: 'width 0.6s cubic-bezier(.2,.9,.2,1)',
  },
}));

const statsData = [
  {
    title: 'FrontEnd Developer ',
    exp: '2+ Years Experience',
    projects: '4+',
    techs: '10+',
    frontend: 95,
    backend: 20,
  },
];

export default function HeroSection() {
  const theme = useTheme();
  const navigate = useNavigate();

  const roles = [
    'FrontEnd Developer',
    'React Enthusiast',
    'UI-focused Engineer',
    'Open to Collaboration',
  ];
  const typed = useTypewriter(roles, 90, 1400);

  return (
    <Box sx={{ py: { xs: 2, md: 15 } }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* ==== Left Section ==== */}
        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          <Box>
            <BlinkingLabel
              variant="subtitle2"
              sx={{
                display: 'inline-block',
                padding: theme.spacing(0.5, 2),
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText,
                borderRadius: '20px',
                mb: 4,
              }}
            >
              Available for New Opertunite
            </BlinkingLabel>

            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: 1.1,
                fontSize: { md: 40, xs: 28 },
                mb: { md: 4, xs: 2 },
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              👋 Hi, I&rsquo;m Durgesh Kasle
            </Typography>

            <Typography
              sx={{
                mb: 2,
                color: theme.palette.text.secondary,
                textAlign: { xs: 'center', md: 'left', height: '50px' },
              }}
            >
              <span style={{ color: theme.palette.primary.main, fontWeight: 700 }}>{typed}</span>
              <span style={{ marginLeft: 6, color: theme.palette.text.secondary }}>
                — building modern web apps.
              </span>
            </Typography>

            <Typography
              sx={{
                color: theme.palette.text.secondary,
                mb: { md: 5, xs: 3 },
                maxWidth: { md: 640, xs: '100%' },
                textAlign: { xs: 'center', md: 'left' },
                mx: { xs: 'auto', md: 0 },
                fontWeight: { md: 500, xs: 100 },
              }}
            >
              I build{' '}
              <strong style={{ color: theme.palette.primary.main }}>
                production-ready frontends{' '}
              </strong>
              with a strong focus on
              <strong style={{ color: theme.palette.info.main }}> performance</strong>,
              <strong style={{ color: theme.palette.warning.main }}> accessibility</strong>, and
              <strong style={{ color: theme.palette.secondary.main }}>
                {' '}
                maintainable architecture
              </strong>
              . From{' '}
              <strong style={{ color: theme.palette.primary.main }}>pixel-perfect UIs</strong> to
              <strong style={{ color: theme.palette.success.main }}> efficient APIs Integration</strong>, I aim
              to deliver
              <strong style={{ color: theme.palette.info.main }}> clean</strong>,
              <strong style={{ color: theme.palette.success.main }}> reliable</strong>, and
              <strong style={{ color: theme.palette.primary.main }}>
                {' '}
                high-performing solutions
              </strong>
              . Explore my work — or let’s collaborate to bring your next idea to life.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate('/projects')}
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  py: 1.2,
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate('/contact')}
                sx={{
                  color: theme.palette.text.primary,
                  borderColor: 'rgba(255,255,255,0.15)',
                  textTransform: 'none',
                  px: 3,
                  py: 1.2,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                Hire Me 🙋‍♂️
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* ==== Right Section ==== */}
        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          {statsData.map((stat, i) => (
            <StatsCard key={i}>
              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <GradientIcon>{'</>'}</GradientIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    {stat.exp}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={3} gap={2}>
                <Box>
                  <Typography variant="h4" sx={{ color: '#90caf9', fontWeight: 700 }}>
                    {stat.projects}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Projects Delivered
                  </Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant="h4" sx={{ color: '#64b5f6', fontWeight: 700 }}>
                    {stat.techs}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Technologies
                  </Typography>
                </Box>
              </Box>

              <Box>
                <SkillRow>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Frontend Expertise
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#a5d6a7' }}>
                    {stat.frontend}%
                  </Typography>
                </SkillRow>
                <ProgressBar
                  value={stat.frontend}
                  gradient="linear-gradient(90deg, #a5d6a7, #42a5f5)"
                />

                <SkillRow>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Backend Expertise
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64b5f6' }}>
                    {stat.backend}%
                  </Typography>
                </SkillRow>
                <ProgressBar
                  value={stat.backend}
                  gradient="linear-gradient(90deg, #42a5f5, #a5d6a7)"
                />
              </Box>
            </StatsCard>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
