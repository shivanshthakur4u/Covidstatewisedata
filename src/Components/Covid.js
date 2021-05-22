import { useEffect, useState } from "react";
import "../styles.css";
const Covid = () => {
  const date = new Date().getFullYear();
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
      console.log(actualData.statewise);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://production-assets.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico"
      />
      <link
        rel="mask-icon"
        type=""
        href="https://production-assets.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg"
        color="#111"
      />
      <h1>Covid-19 Statewise Data</h1>

      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>States</h1>
            </th>
            <th>
              <h1>Confirmed Cases</h1>
            </th>
            <th>
              <h1>Recovered</h1>
            </th>
            <th>
              <h1>Deaths</h1>
            </th>
            <th>
              <h1>Active Cases</h1>
            </th>
            <th>
              <h1>Last Updated Time</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((curE, index) => {
            return (
              <tr key={index}>
                <td>{curE.state}</td>
                <td>{curE.confirmed}</td>
                <td>{curE.recovered}</td>
                <td>{curE.deaths}</td>
                <td>{curE.active}</td>
                <td>{curE.lastupdatedtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p style={{ textAlign: "center" }}>Created By Saurabh Singh © {date}</p>
    </>
  );
};
export default Covid;
