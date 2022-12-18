
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import CalendlyButton from '../CalendlyButton';
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { AccountCircle, Help, Settings } from "@mui/icons-material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";


export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Card>
        <CardHeader title="Break Out Rooms" />
        <Divider />
        <Grid item xs={18} spacing={7}>
          <Grid margin={1.5}>
            <Item sx={{ height: 130 }}>
              <Grid item xs={10} sx={{ textAlign: "left" }} paddingTop={1} paddingBottom={1}>
                <div> TALK ABOUT GEOPOLITICS</div>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid sx={{ fontSize: 12 }} >
                    Zombie created the voice channel
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <Button
                      color="primary"
                      sx={{ mt: 2.5 }}
                      size="small"
                      variant="contained"
                    >
                      JOIN
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <GroupAddIcon sx={{ fontSize: 50 }} />
                </Grid>
              </Grid>
            </Item>
          </Grid>

          <Grid margin={1.5}>
            <Item sx={{ height: 130 }}>
              <Grid item xs={10} sx={{ textAlign: "left" }} paddingTop={1} paddingBottom={1}>
                <div> TALK ABOUT GEOPOLITICS</div>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid sx={{ fontSize: 12 }} >
                    Zombie created the voice channel
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <Button
                      color="primary"
                      sx={{ mt: 2.5 }}
                      size="small"
                      variant="contained"
                    >
                      JOIN
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <GroupAddIcon sx={{ fontSize: 50 }} />
                </Grid>
              </Grid>
            </Item>
          </Grid>

          <Grid margin={1.5}>
            <Item sx={{ height: 130 }}>
              <Grid item xs={10} sx={{ textAlign: "left" }} paddingTop={1} paddingBottom={1}>
                <div> TALK ABOUT GEOPOLITICS</div>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid sx={{ fontSize: 12 }} >
                    Zombie created the voice channel
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <Button
                      color="primary"
                      sx={{ mt: 2.5 }}
                      size="small"
                      variant="contained"
                    >
                      JOIN
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <GroupAddIcon sx={{ fontSize: 50 }} />
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Card>

      <Card>
        <CardHeader title="Schedule a 1 to 1 call" />
        <Divider />
        <Grid item xs={18} spacing={7}>
          <Grid margin={1.5}>
            <Item sx={{ height: 120 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid>
                    <AccountCircle sx={{ fontSize: 50 }} />
                  </Grid>
                  <Grid>Dr. Kamal Singh</Grid>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: "left" }}>
                  <Grid>The Day Routine</Grid>
                  <Grid>DD/MM/YYYY, time</Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        color="primary"
                        sx={{ mt: 2 }}
                        size="small"
                        variant="contained"
                        padding={0}
                      
                      >
                        Connect
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      
                      <CalendlyButton
                        url="https://calendly.com/geniusamansingh/30min" //TODO enter your orgname in the calendly link
                        text="Reshedule"
                        color="primary" sx={{ mt: 2 }} size="small" variant="contained"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          <Grid margin={1.5}>
            <Item sx={{ height: 120 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid>
                    <AccountCircle sx={{ fontSize: 50 }} />
                  </Grid>
                  <Grid>Dr. Amisha</Grid>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: "left" }}>
                  <Grid>The Day Routine</Grid>
                  <Grid>DD/MM/YYYY, time</Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        color="primary"
                        sx={{ mt: 2 }}
                        size="small"
                        variant="contained"
                        padding={0}
                      >
                        Connect
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <Button color="primary" sx={{ mt: 2 }} size="small" variant="contained">
                        Reshedule
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Card>
    </>

  );
};
