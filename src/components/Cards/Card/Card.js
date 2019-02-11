import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classes from './Card.css';
// import './dummy.png';

const styles = {
  card: {
    maxWidth: 125,
  },
  media: {
    height: 80,
  },
};

const card = (props) => {
    
  let Button1 = null;
  if(props.button1){
      Button1 = (
      <Button size="small" color="primary" style={{marginBottom:'0.2rem'}}>
        <span className={classes.Button}>{props.button1}</span>
      </Button>
      );
  }

    let Button2 = null;
    if(props.button2){
        Button2 = (
        <Button size="small" color="secondary" style={{marginBottom:'0.2rem'}}>
          <span className={classes.Button} style={{color: '#FF9E98'}}>{props.button2}</span>
        </Button>
        );
    }

    return (
      
      <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          className={classes.Media}
          // height="140"
          image="./dummy.jpg"
        />
        <CardContent className={classes.CardContent}>
          <Typography variant="h5" component="h5">
            <span className={classes.CardTitle}>{props.cardTitle}</span>
          </Typography>
          <Typography component="p">
            <span className={classes.CardContent}>{props.cardContent}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div className={classes.Button}>
          {Button1}
          {Button2}
        </div>
      </CardActions>
    </Card>
    );
}


export default withStyles(styles)(card);