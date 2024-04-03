import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="features">
        <Button className='btn hireme-btn'>
          <NavLink to='/converter/csv2json'> Convert CSV 2 JSON </NavLink>
        </Button>
        <Button className='btn hireme-btn'>
          <NavLink to='/converter/json2csv'> Convert JSON 2 CSV </NavLink>
        </Button>
        <Button className='btn hireme-btn'>
          <NavLink to='/converter/xlsx2json'> Convert XLSX 2 JSON</NavLink>
        </Button>
        <Button className='btn hireme-btn'>
          <NavLink to='/converter/json2xlsx'> Convert JSON 2 XLSX </NavLink>
        </Button>
      </div>
    </>
  );
};

export default Home;
