// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const style = {
      fontWeight: "bold",
      fontSize: "18px",
      
  }
  useEffect(() => {
    // Replace 'API_ENDPOINT' with the actual URL of your public API
    fetch("https://www.kattabozor.uz/hh/test/api/v1/offers")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data["offers"]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> </p>
          Edit <code>src/App.js</code> and save to reload. */}
        {data.length === 0 ? (
          <div>No data available</div>
        ) : (
          <div className="container">
            <div className="wrapper">
              {data.offers.map((p, i) => (
                <div className="box">
                  <div class="product-card">
                    <div class="badge">{p.merchant}</div>
                    <div class="product-tumb">
                      <img
                        src={p.image.url}
                        alt="product"
                      />
                    </div>
                    <div class="product-details">
                      <span class="product-catagory">{p.brand}</span>
                      <h4>
                        <a href="/">{p.name}</a>
                      </h4>
                      <p>{p.category}:</p>
                      <ul>
                        {p.attributes.map((a, i)=>(
                          <li key={i}>- {a.name} : <span style={style}> {a.value}</span></li>
                        ))}
                      </ul>
                      
                      <div class="product-bottom-details">
                        <div class="product-price">
                          <small>$96.00</small>$230.99
                        </div>
                        <div class="product-links">
                          <a href="/">
                          
                          </a>
                          <a href="/">
                            <i class="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
