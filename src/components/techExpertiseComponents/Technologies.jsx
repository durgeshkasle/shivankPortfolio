import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// @mui Components
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//----------------------------
// Component
//----------------------------
export default function Technologies({ technologiesSectionsData = [] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeTab, setActiveTab] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  // Auto switch logic
  // useEffect(() => {
  //   if (!isMobile || !isAuto) return;
  //   const interval = setInterval(() => {
  //     setActiveTab((prev) => (prev === technologiesSectionsData.length - 1 ? 0 : prev + 1));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [isMobile, isAuto, technologiesSectionsData.length]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
    setIsAuto(false);
  };

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Container>
      {/* ===== Section Header ===== */}
      <SectionHeader>
        <Heading variant="h3">Technical Expertise</Heading>
        <SubText variant="body1">
          Showcasing professional expertise across modern web technologies, frameworks, and tools.
        </SubText>
      </SectionHeader>

      {/* ===== Tabs (Visible only in Mobile) ===== */}
      {isMobile && (
        <StyledTabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {technologiesSectionsData.map((section, i) => (
            <Tab key={i} label={section.title} />
          ))}
        </StyledTabs>
      )}

      {/* ===== Cards Section ===== */}
      <StyledGridContainer container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
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
                  <SkillCardHeader>
                    {technologiesSectionsData[activeTab].sectionIcon}
                    <SkillTitle variant="h5">
                      {technologiesSectionsData[activeTab].title}
                    </SkillTitle>
                  </SkillCardHeader>

                  {technologiesSectionsData[activeTab].items.map((item) => (
                    <SkillItem key={item.name}>
                      <SkillTextWrapper>
                        <IconWrapper>{item.icon}</IconWrapper>
                        <Box>
                          <SkillName variant="subtitle1">{item.name}</SkillName>
                          <SkillDesc variant="body2">{item.desc}</SkillDesc>
                        </Box>
                      </SkillTextWrapper>
                    </SkillItem>
                  ))}
                </SkillCard>
              </motion.div>
            </AnimatePresence>
          </Grid>
        ) : (
          technologiesSectionsData.map((section) => (
            <Grid key={section.title} item xs={12} sm={10} md={8}>
              <SkillCard>
                <SkillCardHeader>
                  {section.sectionIcon}
                  <SkillTitle variant="h5">{section.title}</SkillTitle>
                </SkillCardHeader>

                {section.items.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillTextWrapper>
                      <IconWrapper>{item.icon}</IconWrapper>
                      <Box>
                        <SkillName variant="subtitle1">{item.name}</SkillName>
                        <SkillDesc variant="body2">{item.desc}</SkillDesc>
                      </Box>
                    </SkillTextWrapper>
                  </SkillItem>
                ))}
              </SkillCard>
            </Grid>
          ))
        )}
      </StyledGridContainer>
    </Container>
  );
}

// -------------------------------
// Styled Components
// -------------------------------
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 16px',
  },
}));

const SectionHeader = styled(Box)(() => ({
  textAlign: 'center',
  marginBottom: '64px',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize:"40px",

  [theme.breakpoints.down("sm")]:{
    fontSize:"28px"
  }
}));

const SubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: 650,
  margin: '0 auto',
  lineHeight: 1.6,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTab-root': {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'center',
    height: '30px',
    borderRadius: '20px',
    backgroundColor: 'none',
    color: 'wheat',
  },
  '& .Mui-selected': {
    background: 'linear-gradient(90deg, #00c6ff, #2979ff)',
    transition: 'width 0.3s ease',
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
    height: '600px',
    overflowY: 'auto',
  },
}));

const SkillCardHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px',
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.light,
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

const SkillTextWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const SkillDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledGridContainer = styled(Grid)(() => ({
  justifyContent: 'center',
}));
