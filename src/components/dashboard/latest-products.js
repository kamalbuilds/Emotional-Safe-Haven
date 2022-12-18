import { formatDistanceToNow, subHours, subMinutes, subSeconds } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import NextLink from "next/link";
import OnlinePredictionOutlinedIcon from "@mui/icons-material/OnlinePredictionOutlined";

const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subMinutes(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subMinutes(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subMinutes(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: subMinutes(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: subMinutes(Date.now(), 9)
  }
];

export const LatestProducts = (props) => (

  <Card
    {...props}
    sx={{
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      cursor: "pointer",
      color: "inherit",
      justifyContent: "space-between",
      px: 3,
      py: "11px",
      borderRadius: 1,
    }}
  >
    <CardHeader title="Active Counsellors" />
    <Divider />
    
    <List>
      {products.map((product, i) => (
        <NextLink
            key= {product.id}
            href={product.imageUrl}
            passHref
          >
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
                borderRadius: 50,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={` Active ${formatDistanceToNow(product.updatedAt)} ago`}
          />
          <IconButton edge="end" size="small">
            <OnlinePredictionOutlinedIcon />
          </IconButton>
        </ListItem>
        </NextLink>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
        View all
      </Button>
    </Box>
  </Card>
);
