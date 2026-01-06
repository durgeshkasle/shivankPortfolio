import React from 'react';

// @mui cons
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import TimelineIcon from '@mui/icons-material/Timeline';
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// About Module Pages ;-
import HeroSection from '../components/aboutComponents/HeroSection';
import Experience from '../components/aboutComponents/Experience';
import Education from '../components/aboutComponents/Education';
import Stats from '../components/aboutComponents/Stats';

const AboutContainer = () => {
  // ======= Experience Page Data ========
  const highlights = [
    {
      text: 'Proficient in building scalable applications using React.js with clean and maintainable code.',
      icon: <CodeIcon color="primary" />,
    },
    {
      text: 'Strong problem-solving skills with expertise in clean architecture, modular coding practices, and performance optimization.',
      icon: <StarIcon sx={{ color: '#ffb400' }} />,
    },
    {
      text: 'Collaborated effectively with cross-functional teams, following Agile methodology to deliver high-quality applications on time.',
      icon: <GroupWorkIcon color="info" />,
    },
    {
      text: 'Developed reusable and optimized UI components, managing state efficiently with Redux Toolkit and RTK Query.',
      icon: <AssignmentIcon color="success" />,
    },
    {
      text: 'Integrated AI-assisted tools such as Windsurf AI to improve code efficiency, reduce bugs, and accelerate development workflows.',
      icon: <BugReportIcon color="error" />,
    },
    {
      text: 'Delivered multiple production-ready modules and applications for enterprise-level projects, including V5 Global.',
      icon: <RocketLaunchIcon color="primary" />,
    },
    {
      text: 'Led a 5-member team to design and deploy a college website, increasing student engagement by more than 40%.',
      icon: <TimelineIcon color="info" />,
    },
    {
      text: 'Recognized as Lead Intern for consistently outperforming peers and contributing to successful project deliveries.',
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
    },
    {
      text: 'Worked on diverse projects including FundsUp, Lubricants, Helpie, HubTown , Aditya Birla and many more.',
      icon: <WorkIcon color="success" />,
    },
    {
      text: 'Skilled in debugging, troubleshooting, and maintaining large-scale applications to ensure high uptime and client satisfaction.',
      icon: <BugReportIcon color="secondary" />,
    },
  ];

  // ======= Education Page Data =========
  const educationDetails = [
    {
      icon: <SchoolIcon color="primary" />,
      title: 'Bachelor of Engineering (B.E.)',
      institution: 'A.P Shah Institute of Technology, Mumbai, Maharashtra',
      year: '2019 - 2022',
    },
    {
      icon: <SchoolIcon color="primary" />,
      title: 'Maharashtra State Board of Technical Education (MSBTE)',
      institution: "Vidyavardhini's Bhausaheb Vartak Polytechnic",
      year: '2017 - 2019',
    },
  ];

  const certifications = [
    {
      icon: <WorkspacePremiumIcon color="secondary" />,
      name: 'React.js Developer',
      org: 'Tech Paathshala, Mumbai',
      year: '2023',
    },
  ];

  const achievements = [
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Led a 5-member team to design & deploy a college website, increasing student engagement by 40%.',
    },
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Promoted to Lead Intern after consistently outperforming peers in project delivery.',
    },
    {
      icon: <EmojiEventsIcon sx={{ color: '#ffb400' }} />,
      text: 'Successfully delivered 4 full-scale projects from development to deployment, ensuring client satisfaction.',
    },
  ];

  // ====== Stats Page data =========
  const stats = [
    {
      icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
      number: '2+',
      label: 'Years Experience',
    },
    {
      icon: <CodeIcon color="secondary" sx={{ fontSize: 40 }} />,
      number: '4',
      label: 'Full-Scale Projects Delivered',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#ffb400' }} />,
      number: '3 mo',
      label: 'Internship Experience',
    },
    {
      icon: <SchoolIcon color="success" sx={{ fontSize: 40 }} />,
      number: '2',
      label: 'Professional Certifications',
    },
    {
      icon: <GroupIcon color="info" sx={{ fontSize: 40 }} />,
      number: '4',
      label: 'Developers in My Team',
    },
    {
      icon: <ThumbUpAltIcon color="success" sx={{ fontSize: 40 }} />,
      number: '100%',
      label: 'Client Satisfaction Rate',
    },
    {
      icon: <TerminalIcon color="warning" sx={{ fontSize: 40 }} />,
      number: '10+',
      label: 'Technologies Mastered',
    },
    {
      icon: <MilitaryTechIcon color="secondary" sx={{ fontSize: 40 }} />,
      number: '5+',
      label: 'Awards & Achievements',
    },
  ];

  return (
    <div>
      <HeroSection />
      <Stats stats={stats} />
      <Experience highlights={highlights} />
      <Education
        educationDetails={educationDetails}
        certifications={certifications}
        achievements={achievements}
      />
    </div>
  );
};

export default AboutContainer;
