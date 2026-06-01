import {
  Create,
  minValue,
  NumberField,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

const InternCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="firstName" label="Votre Nom" validate={required()} />
        <TextInput
          source="lastName"
          label="Votre Prénom"
          validate={required()}
        />
        <TextInput source="email" label="Votre Email" validate={required()} />
        <NumberInput
          source="remuneration"
          label="Votre Remuneration"
          validate={(required(), minValue(10))}
        />
      </SimpleForm>
    </Create>
  );
};

export default InternCreate;
