import React, { forwardRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { useState, useEffect } from "react";
const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} timeout={{ enter: 500, exit: 500 }} />;
});
export default function ShipmentDetailModal({
  shipment,
  onClose,
  onStatusChange,
}) {
  if (!shipment) return null;
  const [localStatus, setLocalStatus] = useState(shipment.status);

  // Update local state if shipment changes (open a different shipment)
  useEffect(() => {
    setLocalStatus(shipment.status);
  }, [shipment]);

const handleUpdate = () => {
  onStatusChange(shipment.id, localStatus);
  onClose(); // close after update
};
useEffect(() => {
  if (!shipment) setLocalStatus(""); // clear on close
}, [shipment]);

  return (
<Dialog
  open={Boolean(shipment)}
  onClose={onClose}
  maxWidth="sm"
  TransitionComponent={Transition}
  fullWidth
   PaperProps={{
    sx: {
      borderRadius: 4,
      p: 1, // remove padding here
      bgcolor: "#fdfdfd",
      position: "relative",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
    },
  }}
>
  {/* Close Button */}
  <IconButton
    onClick={onClose}
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      color: "text.secondary",
    }}
  >
    <CloseIcon />
  </IconButton>

  {/* Top: Shipment title */}
   <Box mb={3}>
     <Typography variant="h5" fontWeight={700}>
  Shipment ID - <span style={{ color: "#1976d2" }}>{shipment.id}</span>
</Typography>

      </Box>

  {/* Editable Fields */}
  <Box sx={{ mb: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
          Customer Details
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Typography variant="overline" color="text.secondary">Name</Typography>
            <Typography variant="body1">{shipment.customerName}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="overline" color="text.secondary">Email</Typography>
            <Typography variant="body1">{shipment.customerEmail}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="overline" color="text.secondary">Phone</Typography>
            <Typography variant="body1">{shipment.customerPhone}</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Shipment Info */}
      <Box sx={{ mb: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 2 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
          Shipment Info
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="text.secondary">Pickup</Typography>
            <Typography variant="body1">{shipment.pickup}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="text.secondary">Destination</Typography>
            <Typography variant="body1">{shipment.destination}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="text.secondary">Date Created</Typography>
            <Typography variant="body1">{shipment.dateCreated}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" color="text.secondary">Status</Typography>
            <Select
              value={localStatus}
              size="small"
              fullWidth
              sx={{ borderRadius: 2 }}
              onChange={(e) => setLocalStatus(e.target.value)}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Transit">In Transit</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>

  {/* Actions */}
  <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
    <Button
      onClick={onClose}
      variant="outlined"
      sx={{ borderRadius: 2, textTransform: "none" }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleUpdate}
      variant="contained"
      color="primary"
      sx={{ borderRadius: 2, px: 4, textTransform: "none" }}
    >
      Update
    </Button>
  </Box>
</Dialog>


  );
}
