import React from "react";
import { Link } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <div className="employee">
      <div>
        <h3>
          {employee.firstName} {employee.lastName}
        </h3>
        <p>{employee.email}...</p>
        {/* link to employee details */}
        <Link to={`/employee/${employee.id}`}>
          <p>View More</p>
        </Link>
      </div>
      {/* delete button */}
      <span className="delete" onClick={() => deleteEmployee(employee.id)}>
        Remove
      </span>
    </div>
  );
};

export default Employee;
