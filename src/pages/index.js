import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';

import TextField from "@mui/material/TextField";
import NextLink from "next/link";
import { Button } from "@mui/material";

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Emotional Safe Haven
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <TextField 
              id="outlined-multiline-static"
              label="What's Your Dilemma?"
              multiline
              rows={7}
              maxRows={7}
              variant="filled"
              style = {{width: 730}}
            />
            <NextLink href="/">
              <Box sx={{m:1, display: "flex", justifyContent: "flex-end"}} fullWidth>
            <Button
              color="primary"
              //fullWidth
              sx={{ mt: 0,}}
              variant="contained"
            >
              Publish
            </Button>
            </Box>
          </NextLink>
          </Grid>
          
          <Grid
            item
            xl={3}
            lg={4}
            sm={9}
            xs={18}
          >
            <TasksProgress />
          </Grid>
          {/* Activity feed */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
