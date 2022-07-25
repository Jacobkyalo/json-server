import React from "react";

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <div className="employee">
      <div>
        <h3>
          {employee.firstName} {employee.lastName}
        </h3>
        <p>{employee.email}</p>
      </div>
      <span className="delete" onClick={() => deleteEmployee(employee.id)}>
        Remove
      </span>
    </div>
  );
};

export default Employee;
