import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateDetails = (props) => {
    const { tableData , setTableData } = props;
    const { id } = useParams();
    const navigate = useNavigate();
    let foundItem = null;
    // Use forEach to find the item with the matching ID
    tableData.forEach(item => {
        if (item.id == id) {
        foundItem = item;
        }
    });
    const initialValue = {
        id: id,
        name: foundItem.name,
        description: foundItem.description,
        date: foundItem.date,
    }
    // State to hold form data
    const [formData, setFormData] = useState(initialValue);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // setTableData(formData);
        if (formData.id) {
            // Update an existing object
            setTableData((prevTableData) =>
            prevTableData.map((item) =>
                item.id === formData.id ? { ...item, ...formData } : item
            )
            );
            navigate(`/`);
        }
    };

    return (
      <div className="container mt-4">
        <h2>To Do Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID:</label>
            <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            readOnly  // Make the input read-only to prevent user input
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    );
}

export default UpdateDetails;