import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function JobCard({ item }) {
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
    >
      <CardContent>
        <Box>
          <Typography color="text.secondary">Company</Typography>
          <Typography variant="h5">{item.company}</Typography>
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography color="text.secondary">Company</Typography>
          <Typography variant="h6">{item.designation}</Typography>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography color="text.secondary">Location</Typography>
          <Typography variant="h6">{item.location}</Typography>
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography color="text.secondary">Skills Required</Typography>
          <Typography variant="h6">{item.skills.join(", ")}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
