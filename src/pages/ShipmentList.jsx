import { useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FilterStatus from "../components/FilterStatus";
import ShipmentTable from "../components/ShipmentTable";
import ShipmentDetailModel from "../components/ShipmentDetailModel";
import FilterBar from "../components/FilterBar";

import useShipment from "../Hook/useShipment";
import useFiltered from "../Hook/useFiltered";

export default function ShipmentList() {
  const [selectedShipment, setSelectedShipment] = useState(null);

  const { shipments, updateStatus } = useShipment();
  const { searchQuery, setSearchQuery,statusFilter,
  setStatusFilter, filteredData } = useFiltered(shipments);

  const handleViewDetails = (shipment) => {
    setSelectedShipment(shipment);
  };
  const handleCloseModal = () => {
    setSelectedShipment(null);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      {/* Header */}
      <Box mb={3} pb={2} borderBottom="1px solid #eee">
  <Typography variant="h4" sx={{ fontWeight: 600 }}>
    Shipment Tracker Dashboard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Overview of all shipments and their current status
  </Typography>
</Box>


    
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mb: 3,
          alignItems: "flex-start",
        }}
      >

        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 350px" } }}>
          <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
        </Box>
        <Box sx={{gap: { xs: 3, md: 2 }}}>
            <FilterStatus   statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
        </Box>

        {/* Stats Cards */}
        <Box sx={{ display: "flex", gap: { xs: 3, md: 2 }, flexWrap: "wrap", flex: 1 }}>
         <Card sx={{
  p: 2,
  flex: "0 1 120px",
  display: "flex",
  alignItems: "center",
  gap: 1,
  boxShadow: 3,
  borderRadius: 3,
}}>

            <Box sx={{ bgcolor: "#e3f2fd", p: 0.5, borderRadius: "50%" }}>
  <LocalShippingIcon color="primary" fontSize="small" />
</Box>

            <Box>
              <Typography variant="subtitle2" sx={{ fontSize: 14 }}>Total</Typography>
              <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>{shipments.length}</Typography>
            </Box>
          </Card>

          <Card sx={{
  p: 2,
  flex: "0 1 120px",
  display: "flex",
  alignItems: "center",
  gap: 1,
  boxShadow: 3,
  borderRadius: 3,
}}>

            <PendingActionsIcon color="warning" fontSize="small" />
            <Box>
              <Typography variant="h6" sx={{ fontSize: 14 }}>Pending</Typography>
              <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>
                {shipments.filter((s) => s.status === "Pending").length}
              </Typography>
            </Box>
          </Card>

          <Card sx={{
  p: 2,
  flex: "0 1 120px",
  display: "flex",
  alignItems: "center",
  gap: 1,
  boxShadow: 3,
  borderRadius: 3,
}}>

            <DoneAllIcon color="success" fontSize="small" />
            <Box>
              <Typography variant="h6" sx={{ fontSize: 14}}>Delivered</Typography>
              <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>
                {shipments.filter((s) => s.status === "Delivered").length}
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>

<Box sx={{ border: "1px solid #ddd", borderRadius: 1 }}>
  <ShipmentTable shipments={filteredData} onViewDetails={handleViewDetails} />
</Box>



      <ShipmentDetailModel
        shipment={selectedShipment}
        onClose={handleCloseModal}
        onStatusChange={updateStatus}
      />
    </Box>
  );
}
