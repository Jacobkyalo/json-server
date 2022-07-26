import React, { useState } from "react";

const AddForm = ({ addEmployee }) => {
  // states for input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [profile, setProfile] = useState("");
  const [error, setError] = useState(false);

  // function to handle submission of form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //handling form validation before submission
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !department ||
      !profile
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }
    //else add object values to addEmployee Prop
    addEmployee({ firstName, lastName, email, phone, department, profile });

    // set input fields to empty after form submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setProfile("");
    setPhone("");
    setDepartment("");
  };

  return (
    //rendering to the UI
    <section>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__content">
          <label htmlFor="firstname">
            FirstName:
            <input
              type="text"
              placeholder="FirstName..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastname">
            LastName:
            <input
              type="text"
              placeholder="LastName..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="phone">
            Phone No:
            <input
              type="text"
              placeholder="Phone No..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label htmlFor="department">
            Department:
            <input
              type="text"
              placeholder="Department..."
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>
          <label htmlFor="profile">
            Profile:
            <input
              type="url"
              placeholder="Profile Image..."
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </label>
        </div>
        {error && (
          <p style={{ color: "#ff0000", marginTop: "7px" }}>
            Please fill all the fields!
          </p>
        )}
        <button className="form__btn">Add Employee</button>
      </form>
    </section>
  );
};

export default AddForm;
