import React from 'react'

const JSON2CSV = () => {
  const convertJsonToCsvHelper = (data) => {
    const keys = Object.keys(data[0]);
    const csvRows = [];

    // Create the header row
    csvRows.push(keys.join(','));

    // Create data rows
    data.forEach(row => {
      const values = keys.map(key => row[key]);
      csvRows.push(values.join(','));
    });
    return csvRows.join('\n');
  }

  const convertJSONToCSV = () => {
    try {
      const jsonInput = document.getElementById('jsonInput').value;
      const jsonData = JSON.parse(jsonInput);

      const csvData = convertJsonToCsvHelper(jsonData);
      document.getElementById('csvOutput').value = csvData;

      // Enable the download link
      const downloadLink = document.getElementById('downloadLink');
      downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData);
      downloadLink.download = 'output.csv';
      downloadLink.style.display = 'block';
    } catch (error) {
      alert('Error converting JSON to CSV. Please check your input.');
    }
  }
  return (
    <>
      <div className="reqrescontainers">
        <div className="requestBody">
          <p>Convert a JSON to CSV format.</p>
          <textarea id="jsonInput" rows="10" cols="50" placeholder="Enter JSON data here"></textarea>
        </div>
        <div className='convertedResult'>
          <p>CSV output:</p>
          <textarea id="csvOutput" rows="10" cols="50" placeholder="CSV data will appear here" readOnly></textarea>
        </div>
      </div>
      <div className="submitBtn">
        <button onClick={convertJSONToCSV} style={{ padding: '5px', margin: '5px' }}>Convert to CSV</button>
        <button style={{ padding: '5px', margin: '5px' }}><a id="downloadLink">Download CSV</a></button>
      </div>
    </>
  )
}

export default JSON2CSV;

//style="display: none;"