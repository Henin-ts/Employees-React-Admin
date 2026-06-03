import {
  FunctionField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  useGetList,
} from "react-admin";

const InternShow = () => {
  const { data: managers } = useGetList("employees", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "firstName", order: "ASC" },
  });
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="email" />
        <NumberField source="remuneration" />
        <ReferenceField
          reference="employees"
          source="managerId"
          label="Nom du Manager"
        >
          <FunctionField
            render={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

export default InternShow;
