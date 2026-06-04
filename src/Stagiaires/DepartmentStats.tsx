import { useRecordContext, useGetList } from "react-admin";

const DepartmentStats = () => {
  // Étape 1 — lire les données de l'employé courant
  const employee = useRecordContext();

  // Étape 2 — charger les collègues du même département ET actifs
  const {
    data: colleagues,
    isPending,
    error,
    total,
  } = useGetList(
    "employees",
    {
      filter: {
        department: employee?.department, // ← même département
        active: true, // ← actifs uniquement
      },
      pagination: { page: 1, perPage: 1 }, // ← optimisation : on veut juste le total
      sort: { field: "id", order: "ASC" },
    },
    { enabled: !!employee?.department }, // ← évite appel si department undefined
  );

  // État 1 — chargement
  if (isPending) return <p>Chargement des statistiques...</p>;

  // État 2 — erreur
  if (error) return <p>Erreur : impossible de charger les statistiques.</p>;

  // État 3 — données disponibles
  // on exclut l'employé lui-même du total
  const colleaguesCount = (total ?? 0) - 1;

  return (
    <div>
      <h3>Statistiques du département</h3>
      <p>
        <strong>Département : </strong>
        {employee?.department}
      </p>
      <p>
        <strong>Collègues actifs : </strong>
        {colleaguesCount > 0
          ? colleaguesCount + " collègue(s) actif(s)"
          : "Aucun collègue actif dans ce département"}
      </p>
    </div>
  );
};

export default DepartmentStats;
