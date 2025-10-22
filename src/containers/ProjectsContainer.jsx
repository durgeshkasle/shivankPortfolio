import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import ProjectCards from '../components/projectsComponents/ProjectCards';
import ProjectTimeline from '../components/projectsComponents/ProjectTimeline';
import ProjectTechStack from '../components/projectsComponents/ProjectTechStack';

// @mui Icons :-
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Project Images ;-
import tomorLogo from '../assets/images/projectsImages/tomorLogo.png';
import jarvisLogo from '../assets/images/projectsImages/jarvisLogo.png';
import magicBusLogo from '../assets/images/projectsImages/magicBusLogo.png';
import multiActLogo from '../assets/images/projectsImages/multiActLogo.jpeg';

const ProjectsContainer = () => {
  const handleViewMyPro = useCallback(() => {
    toast.info('Source code is private for security reasons.');
  }, []);

  const projects = [
    {
      title: 'MagicBus',
      desc: 'A personal portfolio built using React.js and Material UI with theme-based design.',
      tech: ['React.js', 'Node.Js', 'Express.Js', 'MongoDB', 'TypeScript', 'MUI'],
      image: magicBusLogo,
      link: '#',
    },
    {
      title: 'Jarvis Invest',
      desc: 'A Kanban-style task tracker built using MERN stack and Redux Toolkit.',
      tech: ['React.Js', 'Node.Js', 'Express.Js', 'MySQL', 'Redux', 'JWT Auth'],
      image: jarvisLogo,
      link: '#',
    },
    {
      title: 'Tomor',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['Next.Js', 'Shadcn', 'Chart.js', 'JavaScript', 'Payment gateway'],
      image: tomorLogo,
      link: '#',
    },
    {
      title: 'MultiAct',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['React.Js', 'CSS', 'HTML', 'HighChart.js', 'Google Authentication'],
      image: multiActLogo,
      link: '#',
    },
  ];

  const techStack = [
    'React.js',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Redux Toolkit',
    'TypeScript',
    'Material UI',
    'Tailwind',
    'Framer Motion',
    'JWT Auth',
  ];

  const steps = [
    { label: 'Planning & Design', icon: <BuildIcon color="primary" /> },
    { label: 'Development', icon: <CodeIcon color="secondary" /> },
    { label: 'Testing & Debugging', icon: <CheckCircleIcon color="success" /> },
    { label: 'Deployment', icon: <RocketLaunchIcon sx={{ color: '#ff4081' }} /> },
  ];

  return (
    <>
      <ProjectCards projects={projects} handleViewMyProBtn={handleViewMyPro} />
      <ProjectTechStack techStack={techStack} />
      <ProjectTimeline steps={steps} />
    </>
  );
};

export default ProjectsContainer;
