import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StatusBadge from "./StatusBadge";

export default function ShipmentTable({ shipments, onViewDetails }) {
  return (
<TableContainer
  component={Paper}
  sx={{
    maxHeight: { xs: "50vh", sm: "60vh", md: "65vh" },
         // vertical scroll
    overflow: "auto",        // vertical + horizontal scroll
    borderRadius: 2,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  }}
>
      <Table stickyHeader sx={{ minWidth: 650 }}>
        {/* Table Header */}
       <TableHead
  sx={{
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)", // 👈 subtle shadow
    position: "sticky",
    top: 0,
    zIndex: 2,
  }}
>

          <TableRow hover sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}>

            <TableCell sx={{ fontWeight: 600, fontSize: 14, textAlign: "center" }}>
              Sr. No.
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: 14 }}>Shipment ID</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: 14 }}>Customer Name</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: 14 }}>Pickup Location → Destination</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: 14, textAlign: "center" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: 14, textAlign: "center" }}>Action</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        {/* Show "No Data" message if shipments list is empty */}
{shipments.length === 0 ? (
  <TableBody>
    <TableRow>
      <TableCell colSpan={6} align="center" sx={{ py: 3, fontWeight: 600 }}>
        Data not Found
      </TableCell>
    </TableRow>
  </TableBody>
) : (
  <TableBody>
    {shipments.map((shipment, index) => (
      <TableRow key={shipment.id} hover>
        <TableCell sx={{ fontSize: 13, textAlign: "center" }}>{index + 1}</TableCell>
        <TableCell sx={{ fontSize: 13 }}>{shipment.id}</TableCell>
        <TableCell sx={{ fontSize: 13 }}>{shipment.customerName}</TableCell>
        <TableCell sx={{ fontSize: 13 }}>
          {shipment.pickup} → {shipment.destination}
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <StatusBadge status={shipment.status} />
        </TableCell>
        <TableCell sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<VisibilityIcon />}
            onClick={() => onViewDetails(shipment)}
          >
            View
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
)}

      </Table>
    </TableContainer>
  );
}
