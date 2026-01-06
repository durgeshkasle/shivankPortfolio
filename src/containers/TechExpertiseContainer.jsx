import React from 'react';

// @mui Icons :-
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import HttpsIcon from '@mui/icons-material/Https';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SecurityIcon from '@mui/icons-material/Security';
import TimelineIcon from '@mui/icons-material/Timeline';
import TerminalIcon from '@mui/icons-material/Terminal';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

// Components :-
import Technologies from '../components/techExpertiseComponents/Technologies';
import SkillProgress from '../components/techExpertiseComponents/SkillProgress';
import SkillTagCloud from '../components/techExpertiseComponents/SkillTagCloud';

const TechExpertiseContainer = () => {
  const skillsData = [
    { skill: 'React.js', level: 95 },
    { skill: 'React Native', level: 80 },
    { skill: 'JavaScript', level: 90 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'Material UI', level: 90 },
    { skill: 'Redux Toolkit', level: 90 },
    { skill: 'Axios / Fetch', level: 90 },
    { skill: 'CSS', level: 95 },
    { skill: 'HTML', level: 95 },
  ];

  const skillTagCloudData = [
    'React.js',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Redux Toolkit',
    'Material UI',
    'Tailwind CSS',
    'Axios / Fetch',
    'CSS',
    'HTML',
  ];

  const technologiesSectionsData = [
    {
      title: 'Frontend',
      sectionIcon: <WebIcon sx={{ color: '#42a5f5', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'React.js',
          desc: 'Building dynamic UIs',
          icon: <CodeIcon sx={{ color: '#61dafb' }} />,
        },
        {
          name: 'JavaScript',
          desc: 'Core programming language',
          icon: <CodeIcon sx={{ color: '#f7df1e' }} />,
        },
        {
          name: 'Material UI',
          desc: 'UI component library',
          icon: <DesignServicesIcon sx={{ color: '#00b0ff' }} />,
        },
        {
          name: 'Tailwind CSS',
          desc: 'Utility-first CSS',
          icon: <DeveloperModeIcon sx={{ color: '#38bdf8' }} />,
        },
        {
          name: 'Redux Toolkit',
          desc: 'State Management',
          icon: <TimelineIcon sx={{ color: '#764abc' }} />,
        },
        {
          name: 'React Query',
          desc: 'Data fetching & caching',
          icon: <SyncAltIcon sx={{ color: '#00bfa5' }} />,
        },
        {
          name: 'React Hook Form',
          desc: 'Form handling & validation',
          icon: <AssignmentTurnedInIcon sx={{ color: '#4caf50' }} />,
        },
        {
          name: 'Yup',
          desc: 'Schema-based validation',
          icon: <CheckCircleIcon sx={{ color: '#ff9800' }} />,
        },
        {
          name: 'Axios / Fetch',
          desc: 'API requests',
          icon: <HttpsIcon sx={{ color: '#03a9f4' }} />,
        },
      ],
    },
    {
      title: 'Tools',
      sectionIcon: <SettingsApplicationsIcon sx={{ color: '#ab47bc', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'Git & GitHub',
          desc: 'Version control',
          icon: <BugReportIcon sx={{ color: '#f4511e' }} />,
        },
        {
          name: 'Vercel / Netlify',
          desc: 'Deployment',
          icon: <RocketLaunchIcon sx={{ color: '#00c853' }} />,
        },
        { name: 'Postman', desc: 'API testing', icon: <BuildIcon sx={{ color: '#ff6d00' }} /> },
        { name: 'VS Code', desc: 'Code Editor', icon: <WorkIcon sx={{ color: '#2979ff' }} /> },
        {
          name: 'Cursor AI',
          desc: 'AI learning assistant',
          icon: <PsychologyIcon sx={{ color: '#ff4081' }} />,
        },
        {
          name: 'Windsurf AI',
          desc: 'AI-powered development',
          icon: <SmartToyIcon sx={{ color: '#00bfa5' }} />,
        },
        { name: 'ChatGPT', desc: 'AI assistant', icon: <SmartToyIcon sx={{ color: '#8e24aa' }} /> },
        {
          name: 'Figma',
          desc: 'Design collaboration',
          icon: <DashboardIcon sx={{ color: '#a259ff' }} />,
        },
        {
          name: 'JIRA',
          desc: 'Agile management',
          icon: <GroupWorkIcon sx={{ color: '#0288d1' }} />,
        },
        // { name: 'Docker', desc: 'Containerization', icon: <CloudIcon sx={{ color: '#0db7ed' }} /> },
      ],
    },
  ];

  return (
    <>
      <Technologies technologiesSectionsData={technologiesSectionsData} />
      <SkillProgress skillsData={skillsData} />
      <SkillTagCloud skillTagCloudData={skillTagCloudData} />
    </>
  );
};

export default TechExpertiseContainer;
