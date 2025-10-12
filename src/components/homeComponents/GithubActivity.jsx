// src/pages/Home/GithubActivity.jsx
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { useTheme, styled } from '@mui/material/styles';

// ========== Styled Components ========
const Root = styled('section')(({ theme }) => ({
  padding: '28px 16px',
}));

const RepoCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 12,
  padding: 12,
  border: `1px solid rgba(255,255,255,0.04)`,
  boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
}));

const mockRepos = [
  {
    name: 'portfolio-v2',
    desc: 'Personal portfolio (React, MUI, framer-motion).',
    stars: 45,
    url: 'https://github.com/your-username/portfolio-v2',
  },
  {
    name: 'taskflow-kanban',
    desc: 'Kanban-style task manager built with MERN stack.',
    stars: 33,
    url: 'https://github.com/your-username/taskflow-kanban',
  },
  {
    name: 'ecom-dashboard',
    desc: 'Analytics dashboard for e-commerce admin.',
    stars: 28,
    url: 'https://github.com/your-username/ecom-dashboard',
  },
];

// ========== Component ========
export default function GithubActivity({ username = null }) {
  const theme = useTheme();
  const [repos, setRepos] = React.useState(mockRepos);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!username) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped = data.slice(0, 6).map((r) => ({
            name: r.name,
            desc: r.description || 'No description',
            stars: r.stargazers_count || 0,
            url: r.html_url,
          }));
          setRepos(mapped);
        }
      })
      .catch(() => {
        // keep mock if fetch fails
      })
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <Root id="github">
      <Typography
        variant="h5"
        sx={{ mb: 2, color: theme.palette.primary.light, fontWeight: 700, textAlign: 'center' }}
      >
        GitHub Activity
      </Typography>

      <Grid container spacing={2}>
        {repos.map((r) => (
          <Grid item xs={12} sm={6} md={4} key={r.name}>
            <RepoCard>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    <Link
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                    >
                      {r.name}
                    </Link>
                  </Typography>
                  <Typography sx={{ color: theme.palette.text.secondary, fontSize: 13 }}>
                    ★ {r.stars}
                  </Typography>
                </Box>
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: 14 }}>
                  {r.desc}
                </Typography>
              </CardContent>
            </RepoCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
}
