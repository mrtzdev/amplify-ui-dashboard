import React from "react";
import { View, Heading } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const Tables = () => {
  return (
    <>
      <div>
        <h2>Tables</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333"> Basic Table </Heading>
        <br></br>
        <BasicTable />
      </View>
    </>
  );
};

export default Tables;
