import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
/// Event tab on top
import NextLink from "next/link";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
  >
    <CardContent>
      <Box>
          <Typography
            color="inherit"
            variant="subtitle2"
          >
            Want to talk to an expert?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 1,
              mx: 'auto',
              width: '140px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Talk to expert"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="/404"
            passHref
          >
            <Button
              color="primary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 1 }}
              variant="contained"
            >
              Check out VC
            </Button>
          </NextLink>
        </Box>
    </CardContent>
  </Card>
);
