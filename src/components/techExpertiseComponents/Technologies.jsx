import React, { useState } from 'react';
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

  return (
    <Container>
      {/* ===== Section Header ===== */}
      <SectionHeader>
        <Heading variant="h3">Technical Expertise</Heading>
        <SubText variant="body1">
          Showcasing professional expertise across modern web technologies, frameworks, and tools.
        </SubText>
      </SectionHeader>


      {/* ===== Cards Section ===== */}
      <StyledGridContainer container spacing={4} sx={{ justifyContent: "flex-start" }}>
        {technologiesSectionsData.map((section) => (
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={section.title}>
            <SkillCard>
              <SkillCardHeader>
                {section.sectionIcon}
                <SkillTitle variant="h5">{section.title}</SkillTitle>
              </SkillCardHeader>

              <Box sx={{ padding: '30px' }}>
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
              </Box>
            </SkillCard>
          </Grid>
        ))}
      </StyledGridContainer>
    </Container>
  );
}

// -------------------------------
// Styled Components
// -------------------------------
const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
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
  fontSize: '40px',
  marginTop: "30px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
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
    fontWeight: 600,
    textTransform: 'none',
    justifyContent: 'center',
    height: '36px',
    borderRadius: '20px',
    color: '#fff',
  },
  '& .Mui-selected': {
    background: 'linear-gradient(90deg, #00c6ff, #2979ff)',
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  borderRadius: '20px',
  width: '100%',
  margin: '0 auto',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 0.35s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
    background: 'linear-gradient(145deg, rgba(25,35,55,0.95), rgba(16,22,36,0.9))',
  },
  height: '950px',

  [theme.breakpoints.down("sm")]: {
    height: '650px',
    overflowY: 'auto',
  }

}));

const SkillCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: -1,
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  zIndex: 1,
  paddingBottom: '15px',
  paddingTop: '25px',
  paddingLeft: '20px',
  borderRadius: "20px 20px 0px 0px"
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.light,
  marginLeft: '12px',
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
