import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// @mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ======== Styled Components ========
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 16px',
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  padding: '40px',
  width: '400px',
  height: '1300px',
  margin: '0 auto',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 0.35s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
    background: 'linear-gradient(145deg, rgba(25,35,55,0.95), rgba(16,22,36,0.9))',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '28px',
    width: '340px',
    height: '100%',
    overflowY: 'auto',
    height: '600px',
  },
}));

const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  borderRadius: '12px',
  padding: '14px 20px',
  marginBottom: '14px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    background: 'rgba(255,255,255,0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px',
  },
}));

const IconWrapper = styled(Box)(() => ({
  fontSize: '1.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '18px',
}));

// ======== Component =========
export default function Technologies(props) {
  const { technologiesSectionsData = [] } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeTab, setActiveTab] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  // ===== Auto Switch Logic (only for mobile) =====
  useEffect(() => {
    if (!isMobile || !isAuto) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === technologiesSectionsData.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, isAuto, technologiesSectionsData.length]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
    setIsAuto(false); // Stop auto switching after manual click
  };

  // ===== Motion Variants =====
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Container>
      {/* ===== Section Header ===== */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Technical Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 650,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Showcasing professional expertise across modern web technologies, frameworks, and tools.
        </Typography>
      </Box>

      {/* ===== Tabs (Visible only in Mobile) ===== */}
      {isMobile && (
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            mb: 3,
            '& .MuiTab-root': {
              color: theme.palette.text.secondary,
              fontWeight: 600,
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              height: '30px',
              borderRadius: '20px',
              backgroundColor: 'none',
            },
            '& .Mui-selected': {
              color: 'wheat',
              background: 'linear-gradient(90deg, #00c6ff, #2979ff)',
              transition: 'width 0.3s ease',
            },
          }}
        >
          {technologiesSectionsData.map((section, i) => (
            <Tab key={i} label={section.title} />
          ))}
        </Tabs>
      )}

      {/* ===== Cards Section ===== */}
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: 'center' }}
      >
        {isMobile ? (
          <Grid xs={12} sm={4} md={3}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <SkillCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {technologiesSectionsData[activeTab].sectionIcon}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        // color: theme.palette.primary.light,
                      }}
                    >
                      {technologiesSectionsData[activeTab].title}
                    </Typography>
                  </Box>

                  {technologiesSectionsData[activeTab].items.map((item) => (
                    <SkillItem key={item.name}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconWrapper>{item.icon}</IconWrapper>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 500,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </SkillItem>
                  ))}
                </SkillCard>
              </motion.div>
            </AnimatePresence>
          </Grid>
        ) : (
          // ===== Desktop View: Show All Cards =====
          technologiesSectionsData.map((section) => (
            <Grid key={section.title} item xs={12} sm={10} md={8}>
              <SkillCard>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {section.sectionIcon}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.light,
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                {section.items.map((item) => (
                  <SkillItem key={item.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconWrapper>{item.icon}</IconWrapper>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 500,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </SkillItem>
                ))}
              </SkillCard>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
