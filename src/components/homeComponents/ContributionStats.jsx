// src/pages/Home/ContributionStats.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// @mui Component :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ======= Styled Components =======
const Root = styled('section')(({ theme }) => ({
  padding: '28px 16px',
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
  border: `1px solid rgba(255,255,255,0.04)`,
}));

// ============== Components ==========
export default function ContributionStats() {
  const theme = useTheme();

  // Mock data for BarChart
  const skillData = [
    { name: 'React', Projects: 10 },
    { name: 'Next.js', Projects: 8 },
    { name: 'Node.js', Projects: 12 },
    { name: 'MongoDB', Projects: 7 },
    { name: 'Redux', Projects: 9 },
    { name: 'MUI', Projects: 11 },
  ];

  const recentProjects = [
    { name: 'Portfolio Website', tech: 'React, MUI', stars: 45, status: 'Completed' },
    { name: 'TaskFlow Kanban', tech: 'MERN, Redux', stars: 33, status: 'Ongoing' },
    { name: 'Ecom Dashboard', tech: 'Next.js, Chart.js', stars: 28, status: 'Completed' },
  ];

  return (
    <Root id="stats-graph-table">
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 700, color: theme.palette.primary.light, textAlign: 'center' }}
      >
        Contributions & Projects Overview
      </Typography>

      <Grid container spacing={3}>
        {/* === Bar Graph === */}
        <Grid item xs={12} md={6}>
          <StatsCard>
            <CardContent>
              <Typography sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                Projects per Technology
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillData}>
                  <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
                  <YAxis stroke={theme.palette.text.secondary} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.text.primary,
                    }}
                  />
                  <Legend />
                  <Bar dataKey="Projects" fill={theme.palette.primary.main} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </StatsCard>
        </Grid>

        {/* === Table === */}
        <Grid item xs={12} md={6}>
          <StatsCard>
            <CardContent>
              <Typography sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                Recent Projects
              </Typography>
              <TableContainer component={Paper} sx={{ background: theme.palette.background.paper }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: theme.palette.text.secondary }}>Name</TableCell>
                      <TableCell sx={{ color: theme.palette.text.secondary }}>Tech</TableCell>
                      <TableCell sx={{ color: theme.palette.text.secondary }}>Stars</TableCell>
                      <TableCell sx={{ color: theme.palette.text.secondary }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentProjects.map((p) => (
                      <TableRow key={p.name}>
                        <TableCell sx={{ color: theme.palette.text.primary }}>{p.name}</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>{p.tech}</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>{p.stars}</TableCell>
                        <TableCell
                          sx={{
                            color:
                              p.status === 'Completed'
                                ? theme.palette.success.main
                                : theme.palette.warning.main,
                          }}
                        >
                          {p.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </StatsCard>
        </Grid>
      </Grid>
    </Root>
  );
}
