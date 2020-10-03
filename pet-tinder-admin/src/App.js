import React from "react";
import "./App.css";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import hasuraDataProvider from "ra-data-hasura";
import Dashboard from "./Dashboard";
import { UserList } from "./users";
import authProvider from "./authProvider";
import { PetList } from "./pets";

const headers = {
  "content-type": "application/json",
  authorization: "bearer <token>",
};
function App() {
  return (
    <Admin
      dataProvider={hasuraDataProvider("http://localhost:8080", headers)}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <Resource
        name="pets"
        icon={PostIcon}
        list={PetList}
        // edit={PostEdit}
        // create={PostCreate}
        // show={PostShow}
      />
      <Resource
        name="users"
        icon={UserIcon}
        list={UserList}
        // edit={EditGuesser}
      />
      <Resource name="computers" list={ListGuesser} />
      <Resource name="org" />
    </Admin>
  );
}

export default App;
