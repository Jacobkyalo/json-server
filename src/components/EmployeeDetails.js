import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchSingleEmployee = async () => {
    const EMP_RESPONSE = await fetch(
      `http://localhost:5000/employees/${params.id}`
    );
    const data = await EMP_RESPONSE.json();
    setEmployee(data);
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  return (
    <section>
      {employee && (
        <div className="details">
          <h1>
            {
              <FaArrowLeft
                style={{
                  position: "absolute",
                  left: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />
            }
          </h1>
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
