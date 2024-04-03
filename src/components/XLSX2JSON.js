import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';

const XLSX2JSON = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    try {
      const data = await readXlsxFile(file);
      setJsonData(data);
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };
  return (
    <>
      <div className="reqrescontainers">
        <div className="requestBody">
          <p>Upload XLSX File Here:</p>
          <input type="file" onChange={handleFileUpload} />
        </div>
        <div className='convertedResult'>
          <p>JSON output:</p>
          <textarea 
            id="jsonOutput" 
            rows="10" 
            cols="50" 
            value={jsonData ? JSON.stringify(jsonData, null, 2) : 'JSON data will appear here'} 
            readOnly>
          </textarea>
        </div>
      </div>
    </>
  )
}

export default XLSX2JSON