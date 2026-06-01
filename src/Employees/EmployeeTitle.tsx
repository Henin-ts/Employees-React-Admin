import { useRecordContext } from "react-admin";

export const EmployeeTitle = () => {
  const record = useRecordContext();
  return (
    <span>
      Modifier : {record?.firstName} {record?.lastName}
    </span>
  );
};
