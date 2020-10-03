import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const PetList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
