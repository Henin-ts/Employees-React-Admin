import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { EmployeeList } from "./Employees/EmployeeList";
import jsonServerProvider from "ra-data-json-server";
import EmployeeCreate from "./Employees/EmployeeCreate";
import EmployeeEdit from "./Employees/EmployeeEdit";
import EmployeeShow from "./Employees/EmployeeShow";
import InternList from "./Stagiaires/InternList ";
import InternCreate from "./Stagiaires/InternCreate";
const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="Employees"
      list={EmployeeList}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
    />

    <Resource name="stagiaires" list={InternList} create={InternCreate} />
  </Admin>
);
