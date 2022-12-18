import { Card, CardHeader, Divider, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { AccountCircle } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

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
                <Typography variant="h6" color={"primary"}>
                  TALK ABOUT GEOPOLITICS
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid>
                    <Typography variant="subtitle2" fontSize={12} fontWeight="bold">
                      Zombie created the voice channel
                    </Typography>
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <NextLink href="/404" passHref>
                      <Button
                        color="primary"
                        sx={{ mt: 2.5, p: 0.5 }}
                        size="small"
                        variant="contained"
                      >
                        Join
                      </Button>
                    </NextLink>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <AvatarGroup total={24} size="small">
                    <Avatar alt="Agnes Walker" src="/static/images/products/happy3.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/products/happy3.jpg" />
                  </AvatarGroup>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          <Grid margin={1.5}>
            <Item sx={{ height: 130 }}>
              <Grid item xs={10} sx={{ textAlign: "left" }} paddingTop={1} paddingBottom={1}>
                <Typography variant="h6" color={"primary"}>
                  TALK ABOUT GEOPOLITICS
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid>
                    <Typography variant="subtitle2" fontSize={12} fontWeight="bold">
                      Zombie created the voice channel
                    </Typography>
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <NextLink href="/404" passHref>
                      <Button
                        color="primary"
                        sx={{ mt: 2.5, p: 0.5 }}
                        size="small"
                        variant="contained"
                      >
                        Join
                      </Button>
                    </NextLink>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <AvatarGroup total={24} size="small">
                    <Avatar alt="Agnes Walker" src="/static/images/products/happy3.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/products/happy3.jpg" />
                  </AvatarGroup>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          <Grid margin={1.5}>
            <Item sx={{ height: 130 }}>
              <Grid item xs={10} sx={{ textAlign: "left" }} paddingTop={1} paddingBottom={1}>
                <Typography variant="h6" color={"primary"}>
                  TALK ABOUT GEOPOLITICS
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  <Grid>
                    <Typography variant="subtitle2" fontSize={12} fontWeight="bold">
                      Zombie created the voice channel
                    </Typography>
                  </Grid>
                  <Grid sx={{ fontSize: 15 }}>
                    <NextLink href="/404" passHref>
                      <Button
                        color="primary"
                        sx={{ mt: 2.5, p: 0.5 }}
                        size="small"
                        variant="contained"
                      >
                        Join
                      </Button>
                    </NextLink>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <AvatarGroup total={24} size="small">
                    <Avatar alt="Agnes Walker" src="/static/images/products/happy3.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/products/happy3.jpg" />
                  </AvatarGroup>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Card>

      <Card>
        <CardHeader title="Schedule" />
        <Divider />
        <Grid item xs={18} spacing={7}>
          <Grid margin={1.5}>
            <Item sx={{ height: 120 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid>
                    <AccountCircle sx={{ fontSize: 50 }} />
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} color={"primary"}>
                      {" "}
                      Dr. Kamal Singh
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: "left" }}>
                  <Grid>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      The Day Routine
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2">25/06/2023, 7 PM (IST)</Typography>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        color="secondary"
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

          <Grid margin={1.5}>
            <Item sx={{ height: 120 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Grid>
                    <AccountCircle sx={{ fontSize: 50 }} />
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} color={"primary"}>
                      {" "}
                      Dr. Amisha Pandey
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: "left" }}>
                  <Grid>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      The Day Routine
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2">25/06/2023, 7 PM (IST)</Typography>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        color="secondary"
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
