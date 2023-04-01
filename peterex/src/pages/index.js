export default function Home() {
  const tableData = [
    ["usa.png", "USD", "US Dollar $50-100", "1.00"],
    ["usa.png", "USD", "US Dollar $5-20", "1.00"],
    ["usa.png", "USD", "US Dollar $1", "1.24"],
    ["european-union.png", "EUR", "Euro", "0.85"],
    ["japan.png", "JPY", "Japanese Yen", "109.87"],
    ["united-kingdom.png", "GBP", "British Pound", "0.72"],
    ["singapore.png", "SGD", "Singapore Dollar", "1.33"],
    ["australia.png", "AUD", "Australian Dollar", "1.29"],
    ["switzerland.png", "CHF", "Swiss Franc", "0.9  3"],
    ["hong-kong.png", "HKD", "Hong Kong Dollar", "7.76"],
    ["canada.png", "CAD", "Canadian Dollar", "6.52"],
    ["new-zealand.png", "NZD", "New Zealand Dollar", "1.41"],
    ["sweden.png", "SEK", "Swedish Krona", "8.52"],
    ["taiwan.png", "TWD", "Taiwan Dollar", "27.89"],
    ["norway.png", "NOK", "Norwegian Krone", "8.73"],
    ["malaysia.png", "MYR", "Malaysian Ringgit", "4.10"],
    ["china.png", "CNY", "Chinese Yuan Renminbi", "6.52"],
    ["south-korea.png", "KRW", "South Korean Won", "1,142.18"],
  ];
  return (
    <div className="container">
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
              <td style={{ fontSize: "50px" }}>{row[2]}</td>
              <td style={{ fontSize: "50px" }}>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
