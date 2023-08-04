import { useEffect, useState } from "react";
import { serviceData } from "../../data";
import "./style.css";

export default function Services() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleServiceSearch = (event) => {
    const filteredData = serviceData.filter((item) => {
      console.log("item.service", item.service);
      return item.service.includes(event.target.value);
    });
    console.log("filteredData", filteredData, event.target.value);
    setData(filteredData);
    setText(event.target.value);
  };

 useEffect(()=>{
  setData(serviceData);
 },[])
  return (
    <>
      <div className="services-search-container">
        <input value={text} onChange={(event) => handleServiceSearch(event)} placeholder="Search Pet for service .." />
      </div>
      <div className="services-container">
        {data.length > 0 ? data.map((item, index) => {
          return (
            <div className="services-card">
              <h3>{"Service Name"}</h3>
              <p>{item.service}</p>
              <h3>{"Description"}</h3>
              <p>{item.description}</p>
              <h3>{"Service Price"}</h3>
              <p>{item.price}</p>
            </div>
          );
        }): <h3 style={{color:"grey"}}>No records</h3>}
      </div>
    </>
  );
}
