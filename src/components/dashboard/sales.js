import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Sales = (props) => {
  const theme = useTheme();

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Jump to latest
          </Button>
        )}
        title="Latest Activity Feed"
      />
      <Divider />
      {/* cardcontent stores the info of the card */}
      <CardContent>
        <Box
          sx={{
            width: 700,
            height: 400,
            position: 'relative'
          }}
        >
        </Box>
      </CardContent>
    </Card>
  );
};
