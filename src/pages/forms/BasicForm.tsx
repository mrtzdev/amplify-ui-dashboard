import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  TextField,
  Radio,
  RadioGroupField,
  TextAreaField,
} from "@aws-amplify/ui-react";

const initialValues = {
  name: "",
  email: "",
  animal: "Dog",
  message: "",
  subscribe: false,
};

const BasicForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    /// validate ...
    e.preventDefault();
  };

  return (
    <>
      <Flex as="form" direction="column" width="100%" onSubmit={handleSubmit}>
        <TextField
          value={values.name}
          onChange={handleInputChange}
          name="name"
          label={
            <Text>
              Name
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="text"
          isRequired={true}
        />
        <TextField
          value={values.email}
          onChange={handleInputChange}
          name="email"
          label={
            <Text>
              Email
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="email"
          isRequired={true}
        />

        <RadioGroupField
          label="Animal"
          name="animal"
          value={values.animal}
          onChange={handleInputChange}
        >
          <Radio value="Dog">Dog</Radio>
          <Radio value="Cat">Cat</Radio>
          <Radio value="Bird">Bird</Radio>
        </RadioGroupField>

        <TextAreaField
          label="Message"
          value={values.message}
          onChange={handleInputChange}
          name="message"
          rows={6}
        />

        <Button
          type="submit"
          variation="primary"
          width={{ base: "100%", large: "50%" }}
          style={{ marginLeft: "auto" }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default BasicForm;
