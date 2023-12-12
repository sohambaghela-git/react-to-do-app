import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
import { Link } from 'react-router-dom';
import ShowImage from '../images/eye-icon.png';
import UpdateImage from '../images/update-icon.png';

const Home = (props) => {
  const { tableData, setTableData, handleDelete } = props;
 
  return (
    <div className="container mt-4">
      <div className='row'>
        <h2 className='col-md-11'>To Do List</h2>
        <Link to="/formDetails" className='col-md-1 btn btn-primary'>Add</Link>
      </div>
      {tableData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.id}>
                <td className="w-6">{item.id}</td>
                <td className="w-24">{item.name}</td>
                <td className="w-34">{item.description}</td>
                <td className="w-24">{item.date}</td>
                <td className="w-24">
                  <Link to={`/detail/${item.id}`}><img src={ShowImage} alt="Logo" className="logo" /></Link>
                  <Link to={`/updateDetails/${item.id}`}><img src={UpdateImage} alt="Logo" className="logo" /></Link>
                  <button onClick={() => handleDelete(item.id)}>&empty;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="row">
            <br/><hr/>
          <b className='col-md-11'>There is no Data present!</b>
        </div>
      )}
    </div>
  );
}

export default Home;
