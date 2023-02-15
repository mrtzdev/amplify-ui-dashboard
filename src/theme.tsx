import { Theme } from "@aws-amplify/ui-react";

const theme: Theme = {
  name: "my-theme",
  tokens: {
    colors: {
      font: {
        primary: { value: "#0d1a26" },
        // ...
      },
      background: { secondary: "#f5f8fa" },
    },
  },
};

export default theme;
