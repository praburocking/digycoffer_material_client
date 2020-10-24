import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, IconButton } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { purple, red } from "@material-ui/core/colors";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";
import HistoryIcon from "@material-ui/icons/History";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  deleteButton: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    }
  },
  pos: {
    fontSize: 12
  }
}));

export default function FileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          rocking.csv
        </Typography>
        <Grid container justify="space-between" color="textSecondary">
          <Typography className={classes.pos}>Total download : 30</Typography>
          <Typography className={classes.pos} style={{ color: "red" }}>
            failed :10
          </Typography>
        </Grid>
        <Typography variant="body2" component="p">
          Description is wriitten here
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          item
          justify="space-around"
          spacing="1"
          direction={"row"}
        >
          <Grid item container justify="center" xs={12} fullWidth>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              variant="text"
            >
              <Tooltip title="view Download History">
                <Button aria-label="edit" color="secondary" fullWidth>
                  <HistoryIcon />
                </Button>
              </Tooltip>
              <Tooltip title="edit description">
                <Button aria-label="edit" color="secondary" fullWidth>
                  <EditIcon />
                </Button>
              </Tooltip>
              <Tooltip title="download">
                <Button aria-label="download" color="secondary" fullWidth>
                  <GetAppIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button aria-label="delete" color="secondary" fullWidth>
                  <DeleteRoundedIcon style={{ color: "red" }} />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
