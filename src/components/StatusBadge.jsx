import { Chip } from "@mui/material"
export default function StatusBadge({status}){
      const color = 
    status === "Pending" ? "warning" :
    status === "In Transit" ? "info" :
    status === "Delivered" ? "success" :
    "default"; // fallback

  return <Chip label={status} color={color} size="small" />;
}