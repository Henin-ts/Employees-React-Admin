import {
  BooleanInput,
  Edit,
  minValue,
  NumberInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { EmployeeTitle } from "./EmployeeTitle";

const EmployeeEdit = () => {
  return (
    <Edit redirect="list" title={<EmployeeTitle />}>
      <SimpleForm>
        <TextInput source="firstName" label="Nom" validate={required()} />
        <TextInput source="lastName" label="Prénom" validate={required()} />
        <TextInput source="email" label="Email" validate={required()} />
        <SelectInput
          source="department"
          label="Département"
          validate={required()}
          choices={[
            { id: "Informatique", name: "Informatique" },
            { id: "Marketing", name: "Marketing" },
            { id: "RH", name: "RH" },
          ]}
        />
        <NumberInput
          source="salary"
          label="Salaire"
          validate={(required(), minValue(1500))}
        />
        <BooleanInput source="Value" label="Active" defaultValue={true} />
      </SimpleForm>
    </Edit>
  );
};

export default EmployeeEdit;
