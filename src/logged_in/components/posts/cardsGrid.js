import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import SimpleCard from "./filecard";
import {listFiles} from '../../../store/action'
import {connect} from 'react-redux'

import {state_to_props} from '../../../util/common_utils'
//import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  body: {
    flexGrow: 1
  },
  cards: {
    backgroundColor: blue,
    maxLength: 350
  },
  button: {
    margin: "5px",
    padding: "10px",
    alignItems: "center",
    justify: "center"
  },
  appbar_root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Cards = (props) => {

console.log("props ==>",props);
  useEffect(()=>
  {
     props.listFiles()
  },[])
  return (
    <Grid
      container
      item
      md={8}
      sm={12}
      spacing={4}
      direction={"row"}
      justify="center"
    >
      <Grid
        item
        container
        md={4}
     
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
     
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
      
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
   
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
   
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
   
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
  
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
      
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
     
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
 
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}

        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
      <Grid
        item
        container
        md={4}
        sm={6}
        xs={12}
        className={useStyles.cards}
        justify="center"
      >
        <SimpleCard />
      </Grid>
    </Grid>
  );
};

export default connect(state_to_props,{listFiles})(Cards);
