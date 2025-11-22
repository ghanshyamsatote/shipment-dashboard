import { TextField, Box } from "@mui/material";
export default function FilterBar({ searchQuery, setSearchQuery }){
return (
    <Box mb={2}>
      <TextField
        label="Search by ID or Customer Name"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
      />
    </Box>
  );
}