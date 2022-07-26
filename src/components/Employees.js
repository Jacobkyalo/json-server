import React from "react";
import Employee from "./Employee";

const Employees = ({ employee, deleteEmployee }) => {
  return (
    <section>
      {/* mapping through the employees data and returing the Employee component */}
      <>
        {employee.length > 0 ? (
          employee.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              deleteEmployee={deleteEmployee}
            />
          ))
        ) : (
          <h2>No Employees found.</h2>
        )}
      </>
    </section>
  );
};

export default Employees;
