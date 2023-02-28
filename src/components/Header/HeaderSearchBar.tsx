import React from "react";
import { Autocomplete } from "@aws-amplify/ui-react";

//import { baseConfig } from "../../config";

const HeaderSearchBar = () => {
  // const navigate = useNavigate();
  return (
    <div className="header-search-bar">
      <Autocomplete
        label="Autocomplete"
        options={[
          { id: "traffic", label: "Traffic" },
          { id: "sales", label: "Sales" },
          { id: "users", label: "Users" },
          { id: "tables", label: "Tables" },
          { id: "forms", label: "Forms" },
        ]}
        placeholder="Search here..."
        size="small"
      />
    </div>
  );
};

export default HeaderSearchBar;
