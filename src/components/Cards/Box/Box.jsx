import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import ReactLoading from "react-loading";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Box.module.css";

const Box = ({ type, data, date, text }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[type])}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Typography>
        <Typography varient="h5">
          {data ? (
            <CountUp start={0} end={data?.value} duration={2.5} separator="," />
          ) : (
            <ReactLoading type={"bubbles"} color="dark" />
          )}
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography varient="body2">{text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Box;
