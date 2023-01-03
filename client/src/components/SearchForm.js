import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInfieldForm } from "./CustomInfieldForm/CustomInfieldForm";

export const SearchForm = () => {
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

  return (
    <Form>
      {inputFields.map((item, i) => (
        <CustomInfieldForm key={i} {...item} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
