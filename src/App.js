import './App.css';
import Header from './components/Header';
import FormDetails from './components/FormDetails';
import Home from './components/Home'
import Detail from './components/Detail';
import UpdateDetails from './components/UpdateDetails';
import {  Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    //check tableData - id exits - delte ...settableData
    setTableData(tableData.filter(data => data.id !== id));
    navigate('/');
  }

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home tableData={tableData} setTableData={setTableData} handleDelete={handleDelete} />} />
          <Route path="/formDetails" element={<FormDetails setTableData={setTableData}/>} />
          <Route path="/detail/:id" element={<Detail tableData={tableData} setTableData={setTableData} handleDelete={handleDelete} />} />
          <Route path="/updateDetails/:id" element={<UpdateDetails tableData={tableData} setTableData={setTableData} />} />
        </Routes>
    </div>
  );
}

export default App;
