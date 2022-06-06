import "./styles.css";
import CardsComponent from "./component/Cards";
import { Box, Typography } from "@mui/material";
import Profile from "./component/Profile";

export default function App() {
  return (
    <Box sx={{ width: "100%", padding: "4rem" }}>
      <Typography
        gutterBottom
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Internship Task
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        textAlign="left"
        sx={{ fontWeight: "bold" }}
      >
        Profile
      </Typography>
      <Profile />
      <Typography
        gutterBottom
        variant="h6"
        textAlign="left"
        sx={{ fontWeight: "bold" }}
      >
        Jobs
      </Typography>
      <CardsComponent />
    </Box>
  );
}
