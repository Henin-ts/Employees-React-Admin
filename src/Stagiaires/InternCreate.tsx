import {
  BooleanInput,
  Create,
  minValue,
  NumberInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useGetList,
} from "react-admin";
import { useWatch } from "react-hook-form"; // ← import correct

// ← en dehors de InternCreate
const RemunerationInput = () => {
  const isRemunerated = useWatch({ name: "paid" });

  return (
    <NumberInput
      source="remuneration"
      label="Rémunération (€)"
      disabled={!isRemunerated}
      validate={isRemunerated ? [required(), minValue(0)] : []}
    />
  );
};

const InternCreate = () => {
  const { data: managers } = useGetList("employees", {
    pagination: { page: 1, perPage: 100 },
    filter: { active: true },
    sort: { field: "firstName", order: "ASC" },
  });

  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="firstName" label="Prénom" validate={required()} />
        <TextInput source="lastName" label="Nom" validate={required()} />
        <TextInput source="email" label="Email" validate={required()} />

        <BooleanInput source="paid" label="Rémunéré" defaultValue={false} />

        <RemunerationInput />

        <SelectInput
          source="managerId"
          label="Manager"
          validate={required()}
          choices={
            managers?.map((m) => ({
              id: m.id,
              name: `${m.firstName} ${m.lastName}`,
            })) || []
          }
        />
      </SimpleForm>
    </Create>
  );
};

export default InternCreate;
