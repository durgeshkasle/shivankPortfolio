import React, { useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI Icons :-
import LockIcon from '@mui/icons-material/Lock';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// MUI Components :-
import Box from '@mui/material/Box';

// Utils :-
import { sendEmailService } from '../utils/emailService';
import { contactFormSchema } from '../validations/contactFormValidation';

// Components :-
import ContactCard from '../components/contactComponents/ContactCard';
import ContactForm from '../components/contactComponents/ContactForm';
import HeadingAndStance from '../components/contactComponents/HeadingAndStance';

const ContactContainer = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // ===== Contact Card Data =====
  const contactData = [
    {
      title: 'Email Me',
      subtitle: 'shivank.singh.developer@gmail.com',
      icon: <EmailIcon fontSize="large" />,
      onClick: () => (window.location.href = 'mailto:prajapatidheeraJ005@gmail.com'),
    },
    {
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      icon: <LinkedInIcon fontSize="large" />,
      onClick: () => window.open('https://www.linkedin.com/in/shivank011/', '_blank'),
    },
  ];

  const chips = [
    { label: 'Quick Response', icon: <FlashOnIcon /> },
    { label: 'Secure & Private', icon: <LockIcon /> },
    { label: 'Professional Service', icon: <WorkIcon /> },
  ];

  // ===== React Hook Form =====
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      user_name: '',
      user_email: '',
      phoneNo: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(contactFormSchema),
  });

  // ===== Handle Form Submit =====
  const handleFormSubmit = async (formData) => {
    console.log(formData);
    try {
      setIsLoading(true);
      const response = await sendEmailService(formData);

      if (response.success) {
        toast.success(response.message);
        reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // ===== Props to Pass =====
  const formProps = {
    formRef,
    control,
    handleSubmit,
    onSubmit: handleFormSubmit,
    isLoading,
    showForm,
    setShowForm,
    chips,
  };

  return (
    <Box>
      {/* ===== Heading Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeadingAndStance
          heading="Let's Create Something Amazing"
          stance="Ready to bring your next project to life? Let's discuss how we can build exceptional digital experiences together."
        />
      </motion.div>

      {/* ===== Contact Cards ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactCard contacts={contactData} />
      </motion.div>

      {/* ===== Contact Form ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Box sx={{ mt: 5, mb: 7 }}>
          <ContactForm {...formProps} />
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactContainer;
