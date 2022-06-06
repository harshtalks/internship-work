import { Grid, CircularProgress, Box } from "@mui/material";
import * as React from "react";
import { fetchJobs } from "../helper/fetch";
import JobCard from "./Card";

const CardsComponent = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchJobs();
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
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <Grid key={item.id} item>
            <JobCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardsComponent;
