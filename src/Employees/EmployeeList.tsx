import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  SearchInput,
  SelectInput,
  EditButton,
  DeleteButton,
} from "react-admin";

const filters = [
  <SearchInput key="q" source="q" alwaysOn />,

  <SelectInput
    key="department"
    source="department"
    label="Département"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "Marketing", name: "Marketing" },
      { id: "RH", name: "RH" },
    ]}
  />,
];

export const EmployeeList = () => (
  <List filters={filters} perPage={5}>
    <Datagrid rowClick="show">
      <TextField source="firstName" label="Nom" />
      <TextField source="lastName" label="Prénom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Department" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
        }}
      />
      <BooleanField source="Value" label="Actif" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
