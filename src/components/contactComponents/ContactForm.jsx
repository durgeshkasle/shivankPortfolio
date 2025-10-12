import React from 'react';
import { Box, Button, CircularProgress, useTheme, Collapse, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// ===== Styled Components =====
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': { color: theme.palette.primary.main },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: theme.palette.grey[400] },
    '&:hover fieldset': { borderColor: theme.palette.primary.main },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '12px 0',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  // width:"200px",
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
  },
}));

// Styled Components
const ChipBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  backgroundColor: { xs: 'red', md: 'pink' },
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'red',
    display: 'none',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.80rem',
  padding: '6px 10px',
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    fontSize: '20px',
  },
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[6],
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: '#fff',
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
  },
}));

// ===== Component =====
export default function ContactForm({
  control,
  handleSubmit,
  onSubmit,
  isLoading,
  showForm,
  setShowForm,
  formRef,
  chips,
}) {
  const theme = useTheme();

  return (
    <Box textAlign="center">
      {/* ===== Toggle Button ===== */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm((prev) => !prev)}
          sx={{
            borderRadius: '10px',
            fontWeight: 600,
            textTransform: 'none',
            px: 4,
            py: 1.5,
            mb: '20px',
          }}
        >
          {showForm ? 'Hide Contact Form' : 'Show Contact Form'}
        </Button>
      </motion.div>

      {/* ===== Form Section ===== */}

      <Collapse in={showForm} timeout="auto" unmountOnExit>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              backgroundColor: theme.palette.background.paper,
              p: { xs: 3, sm: 4 },
              borderRadius: '16px',
              maxWidth: '700px',
              margin: 'auto',
              boxShadow: theme.shadows[4],
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h3">Send Message</Typography>
              <Typography>Let's discuss your next project</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '15px' }}>
              <Controller
                name="user_name"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    label="Your Name"
                    margin="normal"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                name="user_email"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    label="Your Email"
                    margin="normal"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Box>

            <Controller
              name="subject"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  label="Subject"
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  label="Message"
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <StyledButton type="submit" variant="contained" disabled={isLoading} fullWidth>
              {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Message'}
            </StyledButton>

            <ChipBox>
              {chips.map((chip, index) => (
                <StyledChip key={index} icon={chip.icon} label={chip.label} />
              ))}
            </ChipBox>
          </Box>
        </motion.div>
      </Collapse>
    </Box>
  );
}
