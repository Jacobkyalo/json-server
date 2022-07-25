import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const params = useParams();

  const fetchSingleEmployee = async () => {
    const EMP_RESPONSE = await fetch(
      `http://localhost:5000/employees/${params.id}`
    );
    const data = await EMP_RESPONSE.json();
    setEmployee(data);
    console.log(data);
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  return (
    <section>
      {employee && (
        <div className="details">
          <h2 className="details__head">
            {employee.firstName} {employee.lastName} Details
          </h2>
          <div className="top__details">
            <img src={employee.profile} className="img" />
            <div>
              <p>Email</p>
              <h3>{employee.email}</h3>
            </div>
          </div>
          <div className="bottom__details">
            <p>Department</p>
            <h3>{employee.department}</h3>

            <p>Phone</p>
            <h3>{employee.phone}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmployeeDetails;
