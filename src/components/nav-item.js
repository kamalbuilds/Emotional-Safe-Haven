import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem, CardHeader, IconButton} from '@mui/material';

import OnlinePredictionOutlinedIcon from "@mui/icons-material/OnlinePredictionOutlined";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <NextLink href={href} passHref>
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 2,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Stack direction="row" spacing={2} sx={{mr:1.5}}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </Stack>
          <Box sx={{ flexGrow: 0 }}>{title}</Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
