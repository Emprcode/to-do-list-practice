import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserCustomFields } from "../components/customFields/UserCustomFields";

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
  return (
    <Form>
      {inputFields.map((item, i) => (
        <UserCustomFields key={i} {...item} />
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
