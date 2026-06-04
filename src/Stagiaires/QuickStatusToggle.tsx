import { useRecordContext, useUpdate, useRefresh } from "react-admin";

const QuickStatusToggle = () => {
  const record = useRecordContext();
  const refresh = useRefresh(); // ← ajouter

  const [update, { isPending }] = useUpdate();

  if (!record) return null;

  const handleToggle = () => {
    update(
      "employees",
      {
        id: record.id,
        data: { active: !record.active },
        previousData: record,
      },
      {
        onSuccess: () => refresh(), // ← recharge la liste après update
      },
    );
  };

  const buttonStyle = {
    cursor: isPending ? "not-allowed" : "pointer",
    padding: "4px 12px",
    borderRadius: "4px",
    border: "none",
    color: "white",
    backgroundColor: record.active ? "#f44336" : "#4caf50",
  };

  return (
    <button style={buttonStyle} onClick={handleToggle} disabled={isPending}>
      {isPending ? "..." : record.active ? "Désactiver" : "Activer"}
    </button>
  );
};

export default QuickStatusToggle;
