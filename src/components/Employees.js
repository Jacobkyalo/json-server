import React from "react";
import Employee from "./Employee";

const Employees = ({ employee, deleteEmployee }) => {
  return (
    <section>
      <>
        {employee &&
          employee.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              deleteEmployee={deleteEmployee}
            />
          ))}
      </>
    </section>
  );
};

export default Employees;
