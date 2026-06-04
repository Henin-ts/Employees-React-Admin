import { useRecordContext, useGetList } from "react-admin";
import { Link } from "react-router-dom";

const InternsByManager = () => {
  // Étape 1 — lire les données de l'employé courant
  const employee = useRecordContext();

  // Étape 2 — charger les stagiaires dont le managerId correspond
  const {
    data: stagiaires,
    isPending,
    error,
  } = useGetList(
    "stagiaires",
    {
      filter: { managerId: employee?.id },
      pagination: { page: 1, perPage: 100 },
      sort: { field: "lastName", order: "ASC" },
    },
    { enabled: !!employee?.id }, // ← évite appel avec id undefined
  );

  // État 1 — chargement
  if (isPending) return <p>Chargement des stagiaires...</p>;

  // État 2 — erreur
  if (error) return <p>Erreur : impossible de charger les stagiaires.</p>;

  // État 3 — données disponibles
  return (
    <div>
      {/* Titre avec total */}
      <h3>Stagiaires encadrés ({stagiaires?.length ?? 0})</h3>

      {/* Liste vide */}
      {stagiaires?.length === 0 && <p>Aucun stagiaire encadré par ce manager.</p>}

      {/* Liste des stagiaires */}
      {stagiaires?.map((stagiaires) => (
        <div
          key={stagiaires.id}
          style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}
        >
          {/* Nom complet */}
          <p>
            <strong>Nom : </strong>
            {stagiaires.firstName} {stagiaires.lastName}
          </p>

          {/* Email */}
          <p>
            <strong>Email : </strong>
            <a href={"mailto:" + stagiaires.email}>{stagiaires.email}</a>
          </p>

          {/* Département */}
          <p>
            <strong>Département : </strong>
            {stagiaires.department}
          </p>

          {/* Rémunération */}
          <p>
            <strong>Rémunération : </strong>
            {stagiaires.paid
              ? new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                }).format(stagiaires.remuneration)
              : "Non rémunéré"}
          </p>

          {/* Lien vers InternShow */}
          <Link to={"/interns/" + stagiaires.id + "/show"}>
            Voir la fiche complète →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InternsByManager;
