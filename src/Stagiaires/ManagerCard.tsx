import { useRecordContext } from "react-admin";
import { useGetOne } from "react-admin";
import { Link } from "react-router-dom";

const ManagerCard = () => {
  // Étape 1 — lire les données du stagiaire courant
  const intern = useRecordContext();

  // Étape 2 — charger le manager avec son ID
  const {
    data: manager,
    isPending,
    error,
  } = useGetOne(
    "employees",
    { id: intern?.managerId },
    { enabled: !!intern?.managerId }, // ← ne lance la requête que si managerId existe
  );

  // Étape 3 — gérer les 3 états

  // État 1 — chargement en cours
  if (isPending) return <p>Chargement du manager...</p>;

  // État 2 — erreur
  if (error) return <p>Erreur : impossible de charger le manager.</p>;

  // État 3 — données disponibles
  return (
    <div>
      <h3>Manager</h3>

      {/* Nom complet */}
      <p>
        <strong>Nom : </strong>
        {manager.firstname} {manager.lastname}
      </p>

      {/* Département */}
      <p>
        <strong>Département : </strong>
        {manager.department}
      </p>

      {/* Email cliquable */}
      <p>
        <strong>Email : </strong>
        <a href={"mailto:" + manager.email}>{manager.email}</a>
      </p>

      {/* Statut */}
      <p>
        <strong>Statut : </strong>
        {manager.active ? "✅ Actif" : "❌ Inactif"}
      </p>

      {/* Lien vers la fiche employé */}
      <Link to={"/employees/" + manager.id + "/show"}>
        Voir la fiche complète
      </Link>
    </div>
  );
};

export default ManagerCard;
