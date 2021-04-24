import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import Box from "./Box/Box";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Box
          type="infected"
          data={confirmed}
          date={lastUpdate}
          text="Number of active cases of COVID-19"
        />
        <Box
          type="recovered"
          data={recovered}
          date={lastUpdate}
          text="Number of recoveries from COVID-19"
        />
        <Box
          type="deaths"
          data={deaths}
          date={lastUpdate}
          text="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
