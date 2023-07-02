import React,{useEffect,useState,createContext} from 'react'
import HeaderComponent from '../components/optionChain/header';
import TableComponent from '../components/optionChain/table.js';
import styleSheets from './options.module.css';
import axios from 'axios';
import Loader from '../components/loader/loader';




function OptionChain() {

   const [errorState, seterrorState] = useState(false)
   const [isLoading, setisLoading] = useState(false);
   const [errorMessage, seterrorMessage] = useState("")
   const [tableValues, settableValues] = useState([]);

   const [niftyValue, setniftyValue] = useState(0.0000);
   const [tableModeState, settableModeState] = useState(true);
   const [lastSyncTime, setlastSyncTime] = useState("null");




// const tableMode=(tableMode)=>{

//     settableModeState(tableMode)

// }



//    const getselectedValues=(date,time,expiry,tableState)=>{

//     setisLoading(true)
//     console.log(date)
//     console.log(time)
//     console.log(expiry) 
      
//   if(tableState==false){  
    
//      if(expiry=="currentExpiry")
//      {


//     axios.post("http://127.0.0.1:5000/dataForSelectedDateTimeExpiry",{"date":date,"time":time,"expiry":expiry}).then((res)=>{
//         console.log(res.data)
//         // console.log(res.data.data.records.niftyPrice)
//         setniftyValue(res.data.filtered.niftyPrice)
//         setlastSyncTime(res.data.filtered.time)
//         settableValues(res.data.filtered.data)
//         setisLoading(false)

//     }).catch((err)=>{
//         console.log(err)
//         setisLoading(false)
//     })

//      }  
// else
// {

//     axios.post("http://127.0.0.1:5000/dataForSelectedDateTimeExpiry",{"date":date,"time":time,"expiry":expiry}).then((res)=>{
//         console.log(res.data)
//         console.log(res.data.data.records.niftyPrice)
//         setniftyValue(res.data.data.records.niftyPrice)
//         setlastSyncTime(res.data.time)
//         settableValues(res.data.data.records.values)
//         setisLoading(false)

//     }).catch((err)=>{
//         console.log(err)
//         setisLoading(false)
//     })
// }

// }



// else{
//     setisLoading(true)

//     if(expiry=="currentExpiry")
//     {


//    axios.post("http://127.0.0.1:5000/optionsDashBoard",{"date":date,"time":time,"expiry":expiry}).then((res)=>{
//        console.log(res.data)
//        // console.log(res.data.data.records.niftyPrice)
//        setniftyValue(res.data.filtered.niftyPrice)
//        setlastSyncTime(res.data.filtered.time)
//        settableValues(res.data.filtered.data)
//        setisLoading(false)

//    }).catch((err)=>{
//        console.log(err)
//        setisLoading(false)
//    })

//     }  
// else
// {

//    axios.post("http://127.0.0.1:5000/optionsDashBoard",{"date":date,"time":time,"expiry":expiry}).then((res)=>{
//        console.log(res.data)
//        console.log(res.data.data.records.niftyPrice)
//        setniftyValue(res.data.data.records.niftyPrice)
//        setlastSyncTime(res.data.time)
//        settableValues(res.data.data.records.values)
//        setisLoading(false)

//    }).catch((err)=>{
//        console.log(err)
//        setisLoading(false)
//    })
// }

// }

// }

const tableMode = (tableMode) => {
    settableModeState(tableMode);
  };

  const getselectedValues = (date, time, expiry, tableState) => {
    setisLoading(true);
    console.log(date);
    console.log(time);
    console.log(expiry);

    if (tableState == false) {
      if (expiry == "currentExpiry") {
        // Dummy data for testing
        const res = {
          data: {
            filtered: {
              niftyPrice: 123.45,
              time: "12:34:56",
              data: [1, 2, 3],
            },
          },
        };
        console.log(res.data);
        setniftyValue(res.data.filtered.niftyPrice);
        setlastSyncTime(res.data.filtered.time);
        settableValues(res.data.filtered.data);
        setisLoading(false);
      } else {
        // Dummy data for testing
        const res = {
          data: {
            filtered: {
              niftyPrice: 543.21,
              time: "23:45:12",
              data: [4, 5, 6],
            },
          },
        };
        console.log(res.data);
        setniftyValue(res.data.filtered.niftyPrice);
        setlastSyncTime(res.data.filtered.time);
        settableValues(res.data.filtered.data);
        setisLoading(false);
      }
    } else {
      setisLoading(true);

      if (expiry == "currentExpiry") {
        // Dummy data for testing
        const res = {
          data: {
            filtered: {
              niftyPrice: 789.01,
              time: "01:23:45",
              data: [7, 8, 9],
            },
          },
        };
        console.log(res.data);
        setniftyValue(res.data.filtered.niftyPrice);
        setlastSyncTime(res.data.filtered.time);
        settableValues(res.data.filtered.data);
        setisLoading(false);
      } else {
        // Dummy data for testing
        const res = {
          data: {
            filtered: {
              niftyPrice: 987.65,
              time: "10:01:23",
              data: [10, 11, 12],
            },
          },
        };
        console.log(res.data);
        setniftyValue(res.data.filtered.niftyPrice);
        setlastSyncTime(res.data.filtered.time);
        settableValues(res.data.filtered.data);
        setisLoading(false);
      }
    }
  };
  const sampleData = [
    {
      CE: {
        openInterest: 100,
        changeinOpenInterest: 10,
        totalTradedVolume: 200,
        impliedVolatility: 0.5,
        lastPrice: 150,
        change: 5,
        pChange: 2,
      },
      PE: {
        openInterest: 150,
        changeinOpenInterest: 20,
        totalTradedVolume: 300,
        impliedVolatility: 0.6,
        lastPrice: 200,
        change: -7,
        pChange: -3,
      },
      strikePrice: 1000,
    },
    {
      CE: {
        openInterest: 50,
        changeinOpenInterest: -5,
        totalTradedVolume: 150,
        impliedVolatility: 0.4,
        lastPrice: 120,
        change: 8,
        pChange: 4,
      },
      PE: {
        openInterest: 200,
        changeinOpenInterest: 15,
        totalTradedVolume: 250,
        impliedVolatility: 0.7,
        lastPrice: 180,
        change: -5,
        pChange: -2,
      },
      strikePrice: 1100,
    },
    // ... additional data
  ];
  
    return (

        
        <div id={styleSheets.optionPage}>
         {/* <OptionContext.Provider value={experies}> */}
        <HeaderComponent  selectedValues={getselectedValues} nifty={niftyValue} lastSync={lastSyncTime} tableMode={tableMode}  ></HeaderComponent> 
       {/* {isLoading ?  */}
    { !isLoading ? <TableComponent  /*values={tableValues}*/values={sampleData}> </TableComponent> : <Loader></Loader>}
       {/* : <Loader></Loader>} */}
       {/* </OptionContext.Provider>    */}
        </div>
    )

}


export default OptionChain


