import React, {useState} from 'react'
import ExchangeRates from './Component/ExchangeRates/ExchangeRates';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const [data, setData] = useState("INR")
  const [searchData, setSearchData] = useState("")
  const classes = useStyles();

  const handleKey = (e) => {
    e.stopPropagation();
    setData(e.target.value)
  }

  const keyPress = () =>{
    setSearchData(data)
  }
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" onChange={handleKey}/>
      </form>
      <Button onClick={keyPress}>Search</Button>
      <ExchangeRates data={data} />
    </div>
  );
}

export default App

