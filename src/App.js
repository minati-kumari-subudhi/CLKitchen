
import './App.css';
import React, {useState} from 'react';

  const App = () => {
    // Sample data for the table
    const [tableData, setTableData] = useState([
      { id: 1, name: 'John Doe', Email: 'john@gmail.com' },
      { id: 2, name: 'Jane Doe', Email: 'Jane@gmail.com' },
      { id: 3, name: 'Bob Smith', Email: 'Bob@gmail.com' },
    ]);
  
    // Function to render table headers dynamically
    const renderTableHeaders = () => {
      return Object.keys(tableData[0]).map((key, index) => (
        <th key={index}>{key}</th>
      ));
    };
  
    // Function to render table rows dynamically
    const renderTableRows = () => {
      return tableData.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ));
    };
  
    return (
      <div>
        <h1>Dynamic Table Example</h1>
        <table>
          <thead>
            <tr>{renderTableHeaders()}</tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    );  
}

export default App;
