import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Detail = (props) => {
  const { tableData, handleDelete } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the item with the matching ID
  const foundItem = tableData.find(item => item.id == id);

  if (!foundItem) {
    return <div className="text-center mt-3"><b>Item not found!</b></div>;
  }

  return (
    <div>
      <h2>Detail</h2>
      <div className="container mt-4">
        <div className="card" style={{width:"45%", marginLeft:"26%"}}>
          <div className="card-body">
            <div className='row'>
              <div className='col-md-3' ></div>
              <h3 className="col-md-6 card-title">{foundItem.name}</h3>
              <h6 className="col-md-3 card-subtitle mb-2 text-muted">{foundItem.date}</h6>
            </div>
            <hr />
            <p className="card-text" style={{margin:"2%"}}>
              {foundItem.description}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <Link className="btn btn-success" to={`/updateDetails/${foundItem.id}`}>
                Update
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(foundItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
