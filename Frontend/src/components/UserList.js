import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    marginLeft: '45%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  console.log(props.list)
  return props.list.map(user => {
    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="User"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {" "+user.firstname + " " + user.lastname + " "}
                </Typography>
                {" "+user.email + " " + user.id+ " "}
                </React.Fragment>
            }
          />
        </ListItem>
      </List>
    )
  });
}
