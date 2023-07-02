import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdvDecChart from '../components/liveGraphs/advDec';
import NiftyChart from '../components/liveGraphs/nifty';
import 'date-fns';

import Loader from '../components/loader/loader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TableComponent from '../components/optionChain/table.js';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  // const [advValues, setAdv] = useState([]);
  // const [decValues, setDec] = useState([]);
  // const [ratioValuesNifty, setRatioNifty] = useState([]);
  // const [ratioValues, setRatio] = useState([]);
  // const [xAxisForAdvances, setXAxisForAdvances] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [liveNiftyValue, setLiveNiftyValue] = useState(0);
  // const [liveSyncTime, setLiveSyncTime] = useState("null");
  // const [liveType, setLiveType] = useState(true);
  // const [experies, setExperies] = useState([]);
  // const [optionsData, setOptionsData] = useState({});
  const [advValues, setAdv] = useState([10, 20, 30, 40, 50]); // sample data for advances
  const [decValues, setDec] = useState([5, 10, 15, 20, 25]); // sample data for declines
  const [ratioValuesNifty, setRatioNifty] = useState([1, 2, 3, 4, 5]); // sample data for nifty ratios
  const [ratioValues, setRatio] = useState([0.5, 1, 1.5, 2, 2.5]); // sample data for ratio values
  const [xAxisForAdvances, setXAxisForAdvances] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May']); // sample data for x-axis labels
  const [loading, setLoading] = useState(false);
  const [liveNiftyValue, setLiveNiftyValue] = useState(1000); // sample data for live nifty value
  const [liveSyncTime, setLiveSyncTime] = useState("12:00 PM"); // sample data for live sync time
  const [liveType, setLiveType] = useState(true); // sample data for live type flag
  const [experies, setExperies] = useState(['2022-01-01', '2022-02-01', '2022-03-01']); // sample data for expiries
  const [optionsData, setOptionsData] = useState({filtered: {
    data: [
      { 
        symbol: 'AAPL',
        lastPrice: 350.12,
        volume: 12345,
        openInterest: 54321
      },
      {
        symbol: 'GOOGL',
        lastPrice: 1500.67,
        volume: 67890,
        openInterest: 98765
      },
      // Add more option data objects here
    ],
    niftyPrice: 11500,
    time: '09:30 AM'
  }}); // sample data for options data

  const disableFunction = (state) => {
    console.log(`props to parent ${state}`);
    setLiveType(state);
  };

  // useEffect(() => {
  //   console.log(`use effect state ${liveType}`);
  //   const interval = setInterval(() => {
  //     setLoading(true);
  //     console.log(liveType);
  //     axios.post('http://127.0.0.1:5000/liveGraphs', { date: todayDate }).then((res) => {
  //       const xaxis = res.data['result']['AdvDecRatio']['xAsis'];
  //       const nifty = res.data['result']['AdvDecRatio']['yAsisNifty'];
  //       const ratio = res.data['result']['AdvDecRatio']['yAsisAdvDecRatio'];
  //       const advances = res.data['result']['advDec']['yAsisAdvances'];
  //       const declines = res.data['result']['advDec']['yAsisDeclines'];
  //       setXAxisForAdvances(xaxis);
  //       setRatio(ratio);
  //       setRatioNifty(nifty);
  //       setDec(declines);
  //       setAdv(advances);
  //       setLoading(false);
  //     }).catch((err) => console.log(err));

  //     axios.get('http://127.0.0.1:5000/options').then((res) => {
  //       setExperies(res.data[0].experies);
  //       setOptionsData(res.data[0].filtered.data);
  //       setLiveNiftyValue(res.data[0].filtered.niftyPrice);
  //       setLiveSyncTime(res.data[0].filtered.time);
  //       console.log(res.data[0]);
  //       setLoading(false);
  //     }).catch((err) => console.log(err));
  //   }, 18000);

  //   return () => clearTimeout(interval);
  // }, [liveType]);
  useEffect(() => {
    setLoading(true);
    setXAxisForAdvances(['Jan', 'Feb', 'Mar', 'Apr', 'May']); // sample data for x-axis labels
    setRatioNifty([1, 2, 3, 4, 5]); // sample data for nifty ratios
    setRatio([0.5, 1, 1.5, 2, 2.5]); // sample data for ratio values
    setDec([5, 10, 15, 20, 25]); // sample data for declines
    setAdv([10, 20, 30, 40, 50]); // sample data for advances
    setLoading(false);
  
    setExperies(['2022-01-01', '2022-02-01', '2022-03-01']); // sample data for expiries
    setOptionsData({optionsData}); // sample data for options data
    setLiveNiftyValue(1000); // sample data for live nifty value
    setLiveSyncTime("12:00 PM"); // sample data for live sync time
    setLoading(false);
  }, [liveType === true]);
  
  
  if (liveType === true) {
    return (
      <div className={classes.root}>
        <br></br>
        {loading ? <Loader></Loader> :
          <>
            <Grid container>
              <Grid item xs={12}>
                <SwitchLabels initialState={liveType} mode={disableFunction}></SwitchLabels>
              </Grid>
              <TableComponent values={optionsData}></TableComponent>
            </Grid>
          </>
        }
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <br></br>
        {loading ? <Loader></Loader> :
          <div>
            <Grid container>
              <Grid item xs={12}>
                <SwitchLabels initialState={liveType} mode={disableFunction}></SwitchLabels>
              </Grid>
              <Grid item xs={5}>
                <NiftyChart xaxis={xAxisForAdvances} nifty={ratioValuesNifty} ratio={ratioValues}></NiftyChart>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <AdvDecChart xaxis={xAxisForAdvances} advances={advValues} declines={decValues}></AdvDecChart>
              </Grid>
            </Grid>
          </div>
        }
      </div>
    );
  }
}

function SwitchLabels(props) {
  const [state, setState] = useState({ checked: true });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(` switch comp state ${event.target.checked}`);
    props.mode(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={props.initialState} onChange={handleChange} name="checked" />}
      label="Options"
    />
  );
}
