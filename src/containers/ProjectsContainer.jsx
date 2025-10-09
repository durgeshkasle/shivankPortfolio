import React from 'react';
import ProjectCards from '../components/projectsComponents/ProjectCards';
import ProjectTechStack from '../components/projectsComponents/ProjectTechStack';
import ProjectTimeline from '../components/projectsComponents/ProjectTimeline';

// @mui Icons :-
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Project Images ;-
import magicBusLogo from '../assets/images/projectsImages/magicBusLogo.jpg';
import jarvisLogo from '../assets/images/projectsImages/jarvisLogo.png';
import tomorLogo from '../assets/images/projectsImages/tomorLogo.webp';
import multiActLogo from '../assets/images/projectsImages/multiActLogo.jpeg';

const ProjectsContainer = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'A personal portfolio built using React.js and Material UI with theme-based design.',
      tech: ['React.js', 'MUI', 'Framer Motion'],
      image: magicBusLogo,
      link: '#',
    },
    {
      title: 'Task Management App',
      desc: 'A Kanban-style task tracker built using MERN stack and Redux Toolkit.',
      tech: ['MERN', 'Redux', 'JWT Auth'],
      image: jarvisLogo,
      link: '#',
    },
    {
      title: 'E-commerce Dashboard',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['Next.js', 'MUI', 'Chart.js'],
      image: tomorLogo,
      link: '#',
    },
    {
      title: 'E-commerce Dashboard',
      desc: 'Admin dashboard for e-commerce analytics with charts and filtering features.',
      tech: ['Next.js', 'MUI', 'Chart.js'],
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
      <ProjectCards projects={projects} />
      <ProjectTechStack techStack={techStack} />
      <ProjectTimeline steps={steps} />
    </>
  );
};

export default ProjectsContainer;
