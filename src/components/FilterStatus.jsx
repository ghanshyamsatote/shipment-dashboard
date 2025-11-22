import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function FilterStatus({ statusFilter, setStatusFilter }) {
  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel>Status Filter</InputLabel>
      <Select
        value={statusFilter}
        label="Status Filter"
        onChange={(e) => setStatusFilter(e.target.value)}
        sx={{
          borderRadius: "8px",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="In Transit">In Transit</MenuItem>
        <MenuItem value="Delivered">Delivered</MenuItem>
      </Select>
    </FormControl>
  );
}
