// import {useEffect, useState} from 'react';
// function useCurrencyinfo(currency) {
//     const [Data, setData] = useState(null)
//     useEffect( () => { 
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
//         .then((res) => res.json())
//         .them( res => setData(res[currency]))
//         console.log(Data)
//     },[currency])
//     console.log(Data);
//     return Data
// }

// export default useCurrencyinfo

import {useEffect, useState} from "react"


function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    //   .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;