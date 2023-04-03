import { useState, useEffect } from "react";

export default function Home() {
  const [tableData, setTableData] = useState([
    ["usa.png", "USD", "US Dollar $50-100", ""],
    ["usa.png", "USD", "US Dollar $5-20", ""],
    ["usa.png", "USD", "US Dollar $1", ""],
    ["european-union.png", "EUR", "Euro", ""],
    ["japan.png", "JPY", "Japanese Yen", ""],
    ["united-kingdom.png", "GBP", "British Pound", ""],
    ["singapore.png", "SGD", "Singapore Dollar", ""],
    ["australia.png", "AUD", "Australian Dollar", ""],
    ["switzerland.png", "CHF", "Swiss Franc", ""],
    ["hong-kong.png", "HKD", "Hong Kong Dollar", ""],
    ["canada.png", "CAD", "Canadian Dollar", ""],
    ["new-zealand.png", "NZD", "New Zealand Dollar", ""],
    ["sweden.png", "SEK", "Swedish Krona", ""],
    ["taiwan.png", "TWD", "Taiwan Dollar", ""],
    ["norway.png", "NOK", "Norwegian Krone", ""],
    ["malaysia.png", "MYR", "Malaysian Ringgit", ""],
    ["china.png", "CNY", "Chinese Yuan Renminbi", ""],
    ["south-korea.png", "KRW", "South Korean Won", ""],
  ]);

  useEffect(() => {
    // Retrieve the stored buying rates from Local Storage
    const storedData = JSON.parse(localStorage.getItem("tableData"));
    if (storedData) {
      setTableData(storedData);
    }
  }, []);

  const handleBuyingRateChange = (index, value) => {
    const newData = [...tableData];
    newData[index][3] = value;
    setTableData(newData);

    // Store the updated buying rates in Local Storage
    localStorage.setItem("tableData", JSON.stringify(newData));
  };

  return (
    <div className="container">
      <h1 className="PeterExchange">PETER EXCHANGE</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th style={{ fontSize: "50px" }}></th>
            <th style={{ fontSize: "50px" }}>Currency</th>
            <th style={{ fontSize: "50px" }}>Buying Rate</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <img
                  src={`/flags/${row[0]}`}
                  alt={row[2]}
                  className="flag"
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td style={{ fontSize: "50px" }}>{row[1]}</td>
              <td style={{ fontSize: "35px" }}>{row[2]}</td>
              <td style={{ fontSize: "50px" }}>
                <input
                  type="text"
                  value={row[3]}
                  onChange={(event) =>
                    handleBuyingRateChange(index, event.target.value)
                  }
                  className="input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
