import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";
import InternsByManager from "../Stagiaires/InternsByManager";
import DepartmentStats from "../Stagiaires/DepartmentStats";

const EmployeeShowActions = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);

const EmployeeShow = () => (
  <Show actions={<EmployeeShowActions />}>
    <SimpleShowLayout>
      <TextField source="firstName" label="Prénom" />
      <TextField source="lastName" label="Nom" />
      <EmailField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <NumberField
        source="salary"
        label="Salaire"
        options={{
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
        }}
      />
      <BooleanField source="active" label="Actif" />
      <InternsByManager />
      <DepartmentStats />
    </SimpleShowLayout>
  </Show>
);

export default EmployeeShow;
