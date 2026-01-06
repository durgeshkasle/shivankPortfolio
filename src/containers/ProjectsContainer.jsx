import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import ProjectCards from '../components/projectsComponents/ProjectCards';
import ProjectTimeline from '../components/projectsComponents/ProjectTimeline';

// @mui Icons :-
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ProjectsContainer = () => {
  const handleViewMyPro = useCallback(() => {
    toast.info('Source code is private for security reasons.');
  }, []);

  const projects = [
    {
      title: 'FundzUp',
      desc: 'A comprehensive stock market trading platform with a scalable interface providing differentiated access for administrators, sub-brokers, and end-users. Features include real-time trade execution, portfolio tracking, bulk trade imports, and automated processing capabilities.',
      tech: ['React.js', 'Node.Js', 'Express.Js', 'MongoDB', 'TypeScript', 'MUI'],
      link: '#',
    },
    {
      title: 'Lubricants',
      desc: 'A ship lubricants inventory management system designed to track and manage lubricant availability across vessels. Streamlines procurement, monitors stock levels, and ensures optimal lubricant supply for maritime operations.',
      tech: ['React.Js', 'Node.Js', 'Express.Js', 'MySQL', 'Redux', 'JWT Auth'],
      link: '#',
    },
    {
      title: 'Helpie',
      desc: 'An event data collection platform that enables organizations to efficiently gather, organize, and analyze data from various events. Simplifies attendee management, feedback collection, and event insights generation.',
      tech: ['Next.Js', 'Shadcn', 'Chart.js', 'JavaScript', 'Payment gateway'],
      link: '#',
    },
    {
      title: 'HubTown',
      desc: 'A slum redevelopment management platform designed to streamline urban renewal projects. Facilitates project planning, resident relocation tracking, resource allocation, and progress monitoring for sustainable community development.',
      tech: ['React.Js', 'CSS', 'HTML', 'HighChart.js', 'Google Authentication'],
      link: '#',
    },
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
      <ProjectTimeline steps={steps} />
    </>
  );
};

export default ProjectsContainer;
