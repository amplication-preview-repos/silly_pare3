import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="middleName" source="middleName" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
