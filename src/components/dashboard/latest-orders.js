import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const orders = [
  {
    id: uuid(),
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
      event: "Handle your issues",
    },
    createdAt: 1555016400000,
    status: "Upcoming",
  },
  {
    id: uuid(),
    amount: 25.1,
    customer: {
      name: "Cao Yu",
      event: "Handle your issues",
    },
    createdAt: 1555016400000,
    status: "Running",
  },
  {
    id: uuid(),
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
      event: "Handle your issues",
    },
    createdAt: 1554930000000,
    status: "Over",
  },
  {
    id: uuid(),
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
      event: "Handle your issues",
    },
    createdAt: 1554757200000,
    status: "Upcoming",
  },
  {
    id: uuid(),
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
      event: "Handle your issues",
    },
    createdAt: 1554670800000,
    status: "Running",
  },
  {
    id: uuid(),
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
      event: "Handle your issues",
    },
    createdAt: 1554670800000,
    status: "Running",
  },
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Events Tab" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Taken By
              </TableCell>
              <TableCell>
                Event Name
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.customer.event}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'Running' && 'success')
                    || (order.status === 'Over' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
