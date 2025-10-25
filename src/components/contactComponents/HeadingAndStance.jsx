import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HeadingAndStance({ heading, stance }) {
  return (
    <Box textAlign="center" sx={{ mb: 6 }}>
      <Typography
        fontWeight={700}
        sx={{
          mb: 2,
          fontSize: { md: '30px', xs: '25px' },
          mt: 2,
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: (theme) => theme.palette.text.secondary, maxWidth: '700px', mx: 'auto' }}
      >
        {stance}
      </Typography>
    </Box>
  );
}
