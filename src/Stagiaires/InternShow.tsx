import {
  EmailField,
  FunctionField,
  Link,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import ManagerCard from "./ManagerCard";

const InternShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="firstName" />
        <TextField source="lastName" />
        <EmailField source="email" />
        <NumberField source="remuneration" />
        <ReferenceField
          reference="employees"
          source="managerId"
          label="Nom du Manager"
        >
          <FunctionField
            render={(record) => (
              <Link to={`/employees/${record.id}/show`}>
                {record.firstName} {record.lastName}
              </Link>
            )}
          />
        </ReferenceField>
        <ManagerCard />
      </SimpleShowLayout>
    </Show>
  );
};

export default InternShow;
