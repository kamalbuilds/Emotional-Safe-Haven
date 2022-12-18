import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, CardHeader, useMediaQuery, ListItem } from '@mui/material';
import { Selector as SelectorIcon } from '../icons/selector';
import { Logo } from './logo';
import { NavItem } from './nav-item';

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const items = [
  {
    href: "/",
    imageUrl: "/static/images/products/product_3.png",
    title: "Dash Board",
  },
  {
    href: "/404",
    imageUrl: "/static/images/products/product_3.png",
    title: "MonaLisa",
  },
  {
    href: "/404",
    imageUrl: "/static/images/products/product_3.png",
    title: "Monalisa Tiwari",
  },
  {
    href: "/404",
    imageUrl: "/static/images/products/product_3.png",
    title: "Monalisa Tiwari Pandey",
  },
  {
    href: "/404",
    imageUrl: "/static/images/products/product_3.png",
    title: "Ninja Hatori",
  },
];


export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="#" passHref>
                <Typography variant="h6" component="div" href="/" sx={{ flexGrow: 1, color: 'inherit'}}>
                  LOGO
                </Typography>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: 1,
                m: 1,
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  How's your mood today ?
                </Typography>
                <Typography color="secondary" variant="body2">
                  Your mood : Happy
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.300",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 0,
          }}
        />
        <CardHeader title="Active Counsellars" />
        <Box sx={{ flexGrow: 0 }}>
          {items.map((item) => (
            <NavItem key={item.title} href={item.href} title={item.title} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="inherit" endIcon={<ArrowRightIcon />} size="small" variant="text">
            View all
          </Button>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
