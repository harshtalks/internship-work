import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { fetchProfile } from "../helper/fetch";
import { Box, CardMedia, CircularProgress } from "@mui/material";

export default function Profile() {
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchProfile();
    setData(data);
    setLoading(false);
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <Box sx={{ margin: "4rem", justifyContent: "center", display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    data.name && (
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: "2em",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.name[0]}
            </Avatar>
          }
          title={data.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={data.pictureUrl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            College
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            {data.college}
          </Typography>
        </CardContent>
      </Card>
    )
  );
}
