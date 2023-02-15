import React from "react";
import { View, Flex, useTheme } from "@aws-amplify/ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";
import ProfileSettings from "./ProfileSettings";
import "./Profile.css";

const Profile = () => {
  const { tokens } = useTheme();
  return (
    <>
      <div>
        <h2>Profile</h2>
      </div>
      <View maxWidth="100%" padding="0rem" minHeight="100vh">
        <Flex
          direction={{ base: "column", large: "row" }}
          alignItems="flex-start"
          gap={tokens.space.xl}
          marginBottom="30px"
        >
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "100%" }}
            padding="1rem"
          >
            <ProfileHeader />
          </View>
        </Flex>

        <Flex
          direction={{ base: "column", large: "row" }}
          gap={tokens.space.xl}
          alignItems="flex-start"
        >
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "40%" }}
            padding={{ base: "1em", large: "1.5rem" }}
          >
            <ProfileInformation />
          </View>
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "40%" }}
            padding={{ base: "1em", large: "1.5rem" }}
          >
            <ProfileSettings />
          </View>
        </Flex>
      </View>
    </>
  );
};

export default Profile;
