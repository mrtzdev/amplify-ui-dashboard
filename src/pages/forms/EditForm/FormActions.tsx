import React from "react";

import { Button } from "@aws-amplify/ui-react";

interface FormActionsProps {
  formOnSubmit: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const FormActions = (props: FormActionsProps) => {
  const { formOnSubmit, isLoading, isDisabled } = props;

  const handleSubmit = (e) => {
    formOnSubmit();
    e.preventDefault();
  };

  return (
    <>
      <Button width="100%" marginTop="20px">
        Preview
      </Button>
      <Button
        type="submit"
        variation="primary"
        width="100%"
        marginTop="20px"
        onClick={handleSubmit}
        isLoading={isLoading}
        loadingText="Loading..."
        isDisabled={isDisabled}
      >
        Save
      </Button>
    </>
  );
};

export default FormActions;
