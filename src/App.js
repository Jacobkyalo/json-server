import { useEffect, useState } from "react";
import Employees from "./components/Employees";
import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import EmployeeDetails from "./components/EmployeeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:5000/employees");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getEmployees = async () => {
      const serverData = await fetchEmployees();
      setEmployees(serverData);
    };

    getEmployees();
  }, []);

  const addEmployee = async (employee) => {
    const ADD_SERVER_EMP = await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    const RESPONSE = await ADD_SERVER_EMP.json();

    setEmployees([...employees, RESPONSE]);
  };

  const handleRemove = async (id) => {
    await fetch(`http://localhost:5000/employees/${id}`, {
      method: "DELETE",
    });

    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />
                <AddForm addEmployee={addEmployee} />
                <div className="people">
                  <Employees
                    employee={employees}
                    deleteEmployee={handleRemove}
                  />
                </div>
              </>
            }
          />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
