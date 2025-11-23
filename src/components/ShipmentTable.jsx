import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StatusBadge from "./StatusBadge";
import { useState } from "react";
export default function ShipmentTable({ shipments, onViewDetails }) {
   const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
  window.innerWidth < 768 ? 5 : 10
);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const paginatedShipments = shipments.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  

  return (
    <>
  <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 2 }}>
      {/* Table container with fixed height */}
    <TableContainer
  sx={{
    maxHeight: '60vh', // 60% of the viewport height
    height:'auto',
    overflowX: "auto",
    width: "100%",
  }}
>


        <Table stickyHeader sx={{ minWidth: 650 }}>
          {/* Table Head */}
          <TableHead
            sx={{
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
              position: "sticky",
              top: 0,
              zIndex: 2,
            }}
          >
            <TableRow
              sx={{
                "&:hover": { backgroundColor: "#f9f9f9" },
                fontSize: 14,
              }}
            >
              <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
                Sr. No.
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Shipment ID</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Customer Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>
                Pickup Location → Destination
              </TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {paginatedShipments.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{ py: 5, fontStyle: "italic", color: "#999" }}
                >
                  No shipments found
                </TableCell>
              </TableRow>
            ) : (
              <>
                {paginatedShipments.map((shipment, index) => (
                  <TableRow
                    key={shipment.id}
                    hover
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                    }}
                  >
                    <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell
  sx={{
    fontSize: { xs: 12, sm: 13, md: 14 },
    wordBreak: "break-word",
    maxWidth: { xs: 120, sm: 200 },
  }}
>{shipment.id}</TableCell>
                    <TableCell
  sx={{
    fontSize: { xs: 12, sm: 13, md: 14 },
    wordBreak: "break-word",
    maxWidth: { xs: 120, sm: 200 },
  }}
>
                      {shipment.customerName}
                    </TableCell>
                    <TableCell
  sx={{
    fontSize: { xs: 12, sm: 13, md: 14 },
    wordBreak: "break-word",
    maxWidth: { xs: 120, sm: 200 },
  }}
>
                      {shipment.pickup} → {shipment.destination}
                    </TableCell>
                    <TableCell
  align="center"
  sx={{
    fontSize: { xs: 11, sm: 13, md: 14 },
    maxWidth: { xs: 75, sm: 130 },
    wordBreak: "break-word",
    px: 1,
  }}
>
  <StatusBadge status={shipment.status} />
</TableCell>

<TableCell
  align="center"
  sx={{
    px: 1,
  }}
>
  <Button
    variant="contained"
    color="primary"
    size="small"
    startIcon={<VisibilityIcon />}
    sx={{
      minWidth: { xs: 65, sm: 90 },
      fontSize: { xs: 10, sm: 12, md: 13 },
      textTransform: "none",
      px: { xs: 1, sm: 2 },
    }}
    onClick={() => onViewDetails(shipment)}
  >
    {window.innerWidth < 480 ? "View" : "View Detail"}
  </Button>
</TableCell>

                  </TableRow>
                ))}

               
             
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={shipments.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        sx={{
          "& .MuiTablePagination-toolbar": { minHeight: 50 },
        }}
      />
    </Paper>
</>
  );
}
