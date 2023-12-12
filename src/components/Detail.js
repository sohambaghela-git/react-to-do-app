// Detail.js

import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Detail = (props) => {
  const { tableData, setTableData, handleDelete } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  let foundItem = null;
  // Use forEach to find the item with the matching ID
  tableData.forEach(item => {
    if (item.id == id) {
      foundItem = item;
    }
  });

  if (!foundItem) {
    return <div className="text-center mt-3"><b>Item not found!</b></div>;
  }

  return (
    <div>
      <h2> Detail</h2>
      <div className="container mt-4" style={{display:"flex", justifyContent:"center"}}>
        <div className="card" style={{width: "18rem"}}>
          <p>{foundItem.id}</p>
          <h5 className='card-title'>{foundItem.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{foundItem.description}</h6>
          <p className='card-body'>{foundItem.date}</p>
          <div >
            <Link className='btn btn-success' to={`/updateDetails/${foundItem.id}`}>Update</Link>
            <button className='btn btn-danger' onClick={() => handleDelete(foundItem.id)}>Delete</button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Detail;
