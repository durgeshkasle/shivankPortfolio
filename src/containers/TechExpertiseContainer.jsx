import React from 'react';

// @mui Icons :-
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import BugReportIcon from '@mui/icons-material/BugReport';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SecurityIcon from '@mui/icons-material/Security';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HttpsIcon from '@mui/icons-material/Https';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WidgetsIcon from '@mui/icons-material/Widgets';

// Pages
import Technologies from '../components/techExpertiseComponents/Technologies';
import SkillProgress from '../components/techExpertiseComponents/SkillProgress';
import SkillTagCloud from '../components/techExpertiseComponents/SkillTagCloud';

const TechExpertiseContainer = () => {
  const skillsData = [
    { skill: 'React.js', level: 90 },
    { skill: 'Next.js', level: 85 },
    { skill: 'Node.js', level: 80 },
    { skill: 'MongoDB', level: 75 },
    { skill: 'Material UI', level: 88 },
    { skill: 'Redux Toolkit', level: 82 },
    { skill: 'TypeScript', level: 70 },
    { skill: 'Framer Motion', level: 65 },
    { skill: 'Axios / Fetch', level: 85 },
  ];

  const skillTagCloudData = [
    'React.js',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Redux Toolkit',
    'Material UI',
    'Tailwind CSS',
    'TypeScript',
    'Framer Motion',
    'Axios / Fetch',
    'Firebase',
    'Chakra UI',
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
          name: 'Next.js',
          desc: 'Server-side rendering',
          icon: <RocketLaunchIcon sx={{ color: '#fff' }} />,
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
          name: 'Framer Motion',
          desc: 'Smooth animations',
          icon: <StarIcon sx={{ color: '#e91e63' }} />,
        },
        { name: 'Jest', desc: 'Unit testing', icon: <BugReportIcon sx={{ color: '#f4511e' }} /> },
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
        // { name: "ESLint & Prettier", desc: "Code quality & formatting", icon: <SpellcheckIcon sx={{ color: "#ff5722" }} /> },

        // { name: "Storybook", desc: "UI component explorer", icon: <ViewInArIcon sx={{ color: "#ff4081" }} /> },
        // { name: "Vite", desc: "Fast frontend build tool", icon: <RocketLaunchIcon sx={{ color: "#673ab7" }} /> },
        {
          name: 'Chakra UI / Shadcn UI',
          desc: 'Component libraries',
          icon: <WidgetsIcon sx={{ color: '#00bcd4' }} />,
        },
        // { name: "Lottie / Rive", desc: "Animations & motion", icon: <AnimationIcon sx={{ color: "#e91e63" }} /> },
      ],
    },
    {
      title: 'Backend',
      sectionIcon: <StorageOutlinedIcon sx={{ color: '#ffb300', fontSize: '2rem', mr: 1 }} />,
      items: [
        {
          name: 'Node.js',
          desc: 'Runtime environment',
          icon: <TerminalIcon sx={{ color: '#68a063' }} />,
        },
        {
          name: 'Express.js',
          desc: 'Web framework',
          icon: <AssignmentIcon sx={{ color: '#ffffff' }} />,
        },
        {
          name: 'MongoDB',
          desc: 'NoSQL Database',
          icon: <StorageRoundedIcon sx={{ color: '#4db33d' }} />,
        },
        { name: 'REST APIs', desc: 'API development', icon: <ApiIcon sx={{ color: '#00e5ff' }} /> },
        {
          name: 'JWT Auth',
          desc: 'Secure authentication',
          icon: <SecurityIcon sx={{ color: '#ff4081' }} />,
        },
        { name: 'Firebase', desc: 'Cloud backend', icon: <CloudIcon sx={{ color: '#ffca28' }} /> },
        {
          name: 'TypeScript',
          desc: 'Typed JavaScript',
          icon: <DataObjectIcon sx={{ color: '#3178c6' }} />,
        },
        {
          name: 'Mongoose',
          desc: 'MongoDB ODM',
          icon: <SdStorageIcon sx={{ color: '#4db33d' }} />,
        },
        {
          name: 'Supertest',
          desc: 'API testing',
          icon: <AssessmentIcon sx={{ color: '#2962ff' }} />,
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
        { name: 'Docker', desc: 'Containerization', icon: <CloudIcon sx={{ color: '#0db7ed' }} /> },
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
