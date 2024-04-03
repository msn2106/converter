import React from 'react'

const CSV2JSON = () => {
  const convertCsvToJson = () => {
    // Get the CSV input from the user
    var csvInput = document.getElementById("csvInput").value;
    // Parse the CSV data into an array of objects
    var lines = csvInput.split("\n");
    var headers = lines[0].split(",");
    var jsonData = [];
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentLine = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      jsonData.push(obj);
    }

    // Convert the array of objects to JSON
    var jsonOutput = JSON.stringify(jsonData, null, 2);

    // Display the JSON output in the text area
    document.getElementById("jsonOutput").value = jsonOutput;
  }
  return (
    <>
      <div className="reqrescontainers">
        <div className="requestBody">
          <p>Convert a CSV file to JSON format.</p>
          <textarea id="csvInput" rows="10" cols="50" placeholder="Enter CSV data here"></textarea>
        </div>
        <div className='convertedResult'>
          <p>JSON output:</p>
          <textarea id="jsonOutput" rows="10" cols="50" placeholder="CSV data will appear here" readOnly></textarea>
        </div>
      </div>
      <div className="submitBtn">
        <button onClick={convertCsvToJson}>Convert to JSON</button>
      </div>
    </>
  )
}

export default CSV2JSON