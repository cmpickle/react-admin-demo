import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <ReferenceField source="org_id" reference="org">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
