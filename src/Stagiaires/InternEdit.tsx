import {
  Edit,
  minValue,
  NumberInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useGetList,
  useRecordContext,
} from "react-admin";

const InternEdit = () => {
  const { data: managers } = useGetList("employees", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "firstName", order: "ASC" },
  });
  const BookTitle = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
      <span>
        Modifier : {record.firstName} {record.lastName}
      </span>
    );
  };

  return (
    <Edit redirect="list" title={<BookTitle />}>
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
          validate={minValue(1)}
        />
        <SelectInput
          label="Votre manager"
          source="managerId"
          choices={managers}
          optionText="lastName"
        />
      </SimpleForm>
    </Edit>
  );
};

export default InternEdit;
