import { useGetList } from "react-admin";
import { Card, CardContent, Typography, Grid } from "@mui/material";

// ── Composant carte réutilisable ─────────────────────────
const StatCard = ({
  title,
  value,
  isPending,
}: {
  title: string;
  value: number;
  isPending: boolean;
}) => (
  <Card elevation={3}>
    <CardContent>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h2" color="primary">
        {isPending ? "..." : value}
      </Typography>
    </CardContent>
  </Card>
);

// ── Dashboard ────────────────────────────────────────────
const Dashboard = () => {
  // Indicateur 1 — Total employés
  const { total: totalEmployees, isPending: p1 } = useGetList("employees", {
    pagination: { page: 1, perPage: 1 }, // ← optimisation : perPage=1
    sort: { field: "id", order: "ASC" },
  });

  // Indicateur 2 — Employés actifs
  const { total: activeEmployees, isPending: p2 } = useGetList("employees", {
    pagination: { page: 1, perPage: 1 }, // ← optimisation
    filter: { active: true },
    sort: { field: "id", order: "ASC" },
  });

  // Indicateur 3 — Total stagiaires
  const { total: totalInterns, isPending: p3 } = useGetList("stagiaires", {
    pagination: { page: 1, perPage: 1 }, // ← optimisation
    sort: { field: "id", order: "ASC" },
  });

  // Indicateur 4 — Stagiaires rémunérés
  const { total: paidInterns, isPending: p4 } = useGetList("stagiaires", {
    pagination: { page: 1, perPage: 1 }, // ← optimisation
    filter: { paid: true },
    sort: { field: "id", order: "ASC" },
  });

  return (
    <Grid container spacing={3} style={{ padding: "24px" }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total employés"
          value={totalEmployees ?? 0}
          isPending={p1}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Employés actifs"
          value={activeEmployees ?? 0}
          isPending={p2}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total stagiaires"
          value={totalInterns ?? 0}
          isPending={p3}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Stagiaires rémunérés"
          value={paidInterns ?? 0}
          isPending={p4}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
