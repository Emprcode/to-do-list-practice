import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postUser } from "../helper/axiosHelper";
import { CustomInfieldForm } from "./CustomInfieldForm/CustomInfieldForm";
import { ToastContainer, toast } from "react-toastify";

export const SearchForm = () => {
  const [newUser, setNewUser] = useState({});
  const inputFields = [
    {
      name: "fname",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Ram",
    },
    {
      name: "lname",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Aryal",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "youremail@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "********",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(newUser);
    toast[status](message);
  };

  return (
    <Form className="mt-5" onSubmit={handleOnSubmit}>
      <h2>User Form Registration!</h2>
      {inputFields.map((item, i) => (
        <CustomInfieldForm key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
