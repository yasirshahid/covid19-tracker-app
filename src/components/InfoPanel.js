import React,{useEffect,useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth:1000,
      marginTop:50,
      margin:'0 auto'
    
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function InfoPanel() {
    const[globalData,setGlobalData]=useState({});


    useEffect(()=>{
      async function getData(){
        const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
        let data = await response.json();
        delete data.results[0].source;
        setGlobalData(data.results[0]);
        console.log(data.results[0]);
  
      }
      getData()
  
    },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {Object.keys(globalData).map((key,ind)=>{
              return(
                <Grid item xs={12} sm={4} key={ind}>
                <Paper 
                    className={classes.paper}
                    elevation={3}>
                        <h3>{key.replace(/_/g," ").toUpperCase()}</h3>
                        <h3>{globalData[key]}</h3>
                </Paper>
              </Grid>

              )
          })}
        
        
      </Grid>
    </div>
  );
}
