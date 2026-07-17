import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { data: leads } = await supabase
    .from("leads")
    .select("*");

  const totalLeads = leads?.length ?? 0;

  const today = new Date().toDateString();

  const todaysLeads =
    leads?.filter(
      (lead) =>
        new Date(
          lead.created_at
        ).toDateString() === today
    ).length ?? 0;

  const contacted =
    leads?.filter(
      (lead) => lead.status === "Contacted"
    ).length ?? 0;

  const siteVisits =
    leads?.filter(
      (lead) =>
        lead.status === "Site Visit Scheduled" ||
        lead.status === "Site Visit Done"
    ).length ?? 0;

  const booked =
    leads?.filter(
      (lead) => lead.status === "Booked"
    ).length ?? 0;

  const lost =
    leads?.filter(
      (lead) => lead.status === "Lost"
    ).length ?? 0;

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome to EstateOne CRM
        </p>

      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Total Leads
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {totalLeads}
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Today's Leads
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {todaysLeads}
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Contacted
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {contacted}
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Site Visits
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {siteVisits}
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Booked
          </p>

          <h2 className="mt-3 text-5xl font-bold text-green-600">
            {booked}
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow">

          <p className="text-gray-500">
            Lost
          </p>

          <h2 className="mt-3 text-5xl font-bold text-red-600">
            {lost}
          </h2>

        </div>

      </div>

    </div>
  );
}