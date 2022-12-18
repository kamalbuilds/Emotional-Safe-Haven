import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          mx: "auto",
          width: "140px",
          "& img": {
            width: "100%",
          },
        }}
      >
        <img alt="Memory" src={product.media} />
      </Box>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FavoriteRoundedIcon color="secondary" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Baby's first birthday
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
