import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const Overview = () => {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Threat Reports Sent',
        data: [5, 10, 8, 15],
        backgroundColor: ['rgba(33, 150, 243, 0.6)'],
      },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Overview
      </Typography>
      <Grid container spacing={3}>
        {/* Key Metrics */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Total Organizations
              </Typography>
              <Typography variant="h3">25</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Active Subscriptions
              </Typography>
              <Typography variant="h3">20</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Threat Reports Sent
              </Typography>
              <Typography variant="h3">48</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Weekly Threat Reports
            </Typography>
            <Bar data={chartData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;