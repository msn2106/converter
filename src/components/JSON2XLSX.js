import React, { useState } from 'react'
import * as XLSX from 'xlsx';

const JSON2XLSX = () => {
  const [jsonInput, setJsonInput] = useState('');

  const handleConvert = () => {
    try {
      debugger
      const jsonData = JSON.parse(jsonInput);
      const ws = XLSX.utils.json_to_sheet(jsonData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'output.xlsx');
    } catch (error) {
      console.error('Error converting JSON to Excel:', error);
    }
  };
  return (
    <>
      <div className="reqrescontainers">
        <div className="requestBody">
          <p>Convert a JSON to Excel format.</p>
          <textarea
            rows="10"
            cols="50"
            placeholder="Enter JSON data here"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>
        <div className='convertedResult'>
          <p>Excel Output:</p>
          <button style={{ padding: '5px', margin: '5px' }} onClick={handleConvert}><a id="downloadLink">Convert to Excel & Download CSV</a></button>
        </div>
      </div>
    </>
  )
}

export default JSON2XLSX