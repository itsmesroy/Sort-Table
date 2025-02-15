import React, {useState} from 'react';
import './App.css';

function App() {
  const table= 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ];
  const [data, setData] = useState(table)
  const sortByDate=()=>{
    setData([...data].sort((a,b)=>new Date(a.date) - new Date(b.date)))
  }
  const sortByViews=()=>{
    setData([...data].sort((a,b)=>b.views - a.views))
  }
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Date and Views Table</h1>
      <div><button onClick={sortByDate}>Sort by Date</button><button onClick={sortByViews}>Sort by Views</button></div>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Views</th>
            <th style={{ border: "1px solid black", padding: "8px" }} >Article</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, index)=>{
              return(
                <tr key={index}>
                  <td style={{border:"2px"}}>{row.date}</td>
                  <td style={{border:"2px"}}>{row.views}</td>
                  <td style={{border:"2px"}}>{row.article}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
