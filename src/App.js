import { useState } from "react";
import Employees from "./components/Employees";
import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "Jack",
      lastName: "Smith",
      email: "jacksmith@gmail.com",
      phone: 222 - 333 - 444 - 555,
      department: "ICT",
      profile: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      id: 2,
      firstName: "Mary",
      lastName: "Jackson",
      email: "maryjackson@gmail.com",
      phone: 123 - 643 - 534 - 657,
      department: "HR",
      profile: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phone: 976 - 762 - 833 - 477,
      department: "Clerk",
      profile: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  ]);

  const addEmployee = (employee) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    setEmployees([...employees, { id, ...employee }]);
  };

  const handleRemove = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <AddForm addEmployee={addEmployee} />
      <div className="people">
        <Employees employee={employees} deleteEmployee={handleRemove} />
      </div>
    </div>
  );
}

export default App;
