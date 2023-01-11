import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { UserCustomFields } from "../components/customFields/UserCustomFields";
import { postUser } from "../components/helper/axiosHelper";

const inputFields = [
  {
    name: "fName",
    label: "First Name",
    type: "text",
    placeholder: "abc",
    required: true,
  },
  {
    name: "lName",
    label: "Last Name",
    type: "text",
    placeholder: "xyz",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "text",
    placeholder: "******",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "text",
    placeholder: "*****",
    required: true,
  },
];

export const UserForm = () => {
  const [newuser, setNewuser] = useState({});

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setNewuser({
      ...newuser,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await postUser(newuser);
    toast[status](message);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {inputFields.map((item, i) => (
        <UserCustomFields key={i} {...item} onChange={handleOnchange} />
      ))}

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
