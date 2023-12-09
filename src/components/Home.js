import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { tableData, setTableData } = props;
  const handleDelete = (id) => {
    //check tableData - id exits - delte ...settableData
    console.log(id);
    setTableData(tableData.filter(data => data.id !== id));
  }

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
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td><Link className='btn btn-primary' to={`/detail/${item.id}`}>Show</Link></td>
                <td><Link className='btn btn-success' to={`/updateDetails/${item.id}`}>Update</Link></td>
                <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
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
