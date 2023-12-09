import './App.css';
import Header from './components/Header';
import FormDetails from './components/FormDetails';
import Home from './components/Home'
import Detail from './components/Detail';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import UpdateDetails from './components/UpdateDetails';

function App() {
  const [tableData, setTableData] = useState([]);

  const handleDelete = (id) => {
    //check tableData - id exits - delte ...settableData
    console.log(id);
    // checkData = tableData.find { |data| data.id == id }
    // if (checkData){
    //   setTableData(tableData.reject! { |data| data.id == checkData.id });
    // }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home tableData={tableData} setTableData={setTableData} handleDelete={handleDelete}  />} />
          <Route path="/formDetails" element={<FormDetails setTableData={setTableData}/>} />
          <Route path="/detail/:id" element={<Detail tableData={tableData} setTableData={setTableData} />} />
          <Route path="/updateDetails/:id" element={<UpdateDetails tableData={tableData} setTableData={setTableData} />} />
          {/* <Route path={`/view/:${id}`} /> */}
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
