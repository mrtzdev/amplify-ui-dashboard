import React, { useState } from "react";
import { View, Flex, useTheme } from "@aws-amplify/ui-react";
import FormFields from "./FormFields";
import FormActions from "./FormActions";

/// mock api request

const postForm = (data) =>
  new Promise((resolve, reject) => {
    if (!data.title) {
      reject(new Error("Not all information provided"));
    }
    setTimeout(() => resolve(data), 750);
  });

const initialValues = {
  title: "",
  description: "",
  category: "food",
};

const EditForm = () => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState<boolean>(false);

  const { tokens } = useTheme();

  const saveData = () => {
    setIsLoading(true);

    const doPostForm = async (data) => {
      try {
        const result = await postForm(data);
        console.log(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    doPostForm(values);
  };

  const formFieldChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const formFieldIsValid = (name: string, valid: boolean) => {
    setIsDisabled(!valid);
    console.log(name);
  };

  return (
    <>
      <div>
        <h2>Edit Form</h2>
      </div>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
        gap={tokens.space.xl}
        minHeight="100vh"
      >
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "70%" }}
          padding="1rem"
        >
          <br></br>
          <FormFields
            values={values}
            formFieldChange={formFieldChange}
            formFieldIsValid={formFieldIsValid}
          />
        </View>
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "30%" }}
          padding="1rem"
          minHeight="40vh"
        >
          <FormActions
            formOnSubmit={saveData}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </View>
      </Flex>
    </>
  );
};

export default EditForm;
