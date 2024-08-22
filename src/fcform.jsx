import { useState } from "react";
import "./fcform.css";

export default function Form() {
  let [form, setForm] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
  });

  let changeInputData = (event) => {
    let fieldName = event.target.name;
    let inpValue = event.target.value;
    setForm((currValue) => {
      return { ...currValue, [fieldName]: inpValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      name: "",
      country: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div>
      <div className="forms object-fit-fill">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={form.name}
            onChange={changeInputData}
          />
          <br />
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="country"
            id="country"
            onChange={changeInputData}
            value={form.country}
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            value={form.email}
            onChange={changeInputData}
          />
          <br />
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <br />
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            onChange={changeInputData}
            value={form.phone}
          />
          <br />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
