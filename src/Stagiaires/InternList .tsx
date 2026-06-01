import {
  Datagrid,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  SelectInput,
  TextField,
} from "react-admin";

const filters = [
  <SelectInput
    key="department"
    source="department"
    label="Département"
    choices={[
      { id: "Informatique", name: "Informatique" },
      { id: "RH", name: "RH" },
      { id: "Marketing", name: "Marketing" },
    ]}
  />,
  <SelectInput
    key="paid"
    source="paid"
    label="Remuneration"
    choices={[
      { id: "true", name: "Payé" },
      { id: "false", name: "Non Payé" },
    ]}
  />,
];

const InternList = () => {
  return (
    <List filters={filters} perPage={5}>
      <Datagrid>
        <TextField source="firstName" label="Nom" />
        <TextField source="lastName" label="Prénom" />
        <NumberField
          source="remuneration"
          label="Remuneration"
          options={{
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
          }}
        />
        <ReferenceField
          reference="employees"
          source="managerId"
          label="Nom du Manager"
        >
          <FunctionField
            render={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default InternList;
