import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './App.css';
import Home from "./components/Home";
import CSV2JSON from "./components/CSV2JSON";
import JSON2CSV from "./components/JSON2CSV";
import XLSX2JSON from "./components/XLSX2JSON";
import JSON2XLSX from "./components/JSON2XLSX";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route path="/converter" element={<Home />} />
          <Route path="/converter/csv2json" element={<CSV2JSON />} />
          <Route path="/converter/json2csv" element={<JSON2CSV />} />
          <Route path="/converter/xlsx2json" element={<XLSX2JSON />} />
          <Route path="/converter/json2xlsx" element={<JSON2XLSX />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
