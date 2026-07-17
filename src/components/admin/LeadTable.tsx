"use client";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  configuration: string;
  budget: string;
  purpose: string;
  timeline: string;
  status: string;
  notes: string;
  created_at: string;
}

interface Props {
  leads: Lead[];
  updateLead: (
    id: string,
    field: "status" | "notes",
    value: string
  ) => void;
  saveLead: (
    id: string,
    status: string,
    notes: string
  ) => void;
}

export default function LeadTable({
  leads,
  updateLead,
  saveLead,
}: Props) {
  return (
    <div className="overflow-auto rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-black text-white">

          <tr>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-left">
              Email
            </th>

            <th className="p-4 text-left">
              Configuration
            </th>

            <th className="p-4 text-left">
              Budget
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Notes
            </th>

            <th className="p-4 text-left">
              Created
            </th>

            <th className="p-4 text-left">
              Save
            </th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr
              key={lead.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4 font-medium">
                {lead.name}
              </td>

              <td className="p-4">
                {lead.phone}
              </td>

              <td className="p-4">
                {lead.email || "-"}
              </td>

              <td className="p-4">
                {lead.configuration}
              </td>

              <td className="p-4">
                {lead.budget}
              </td>

              <td className="p-4">

                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateLead(
                      lead.id,
                      "status",
                      e.target.value
                    )
                  }
                  className="rounded-lg border p-2"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Site Visit Scheduled</option>
                  <option>Site Visit Done</option>
                  <option>Negotiation</option>
                  <option>Booked</option>
                  <option>Lost</option>
                </select>

              </td>

              <td className="p-4">

                <input
                  value={lead.notes || ""}
                  onChange={(e) =>
                    updateLead(
                      lead.id,
                      "notes",
                      e.target.value
                    )
                  }
                  className="w-64 rounded-lg border p-2"
                  placeholder="Notes..."
                />

              </td>

              <td className="p-4 whitespace-nowrap">
                {new Date(
                  lead.created_at
                ).toLocaleString("en-IN")}
              </td>

              <td className="p-4">

                <button
                  onClick={() =>
                    saveLead(
                      lead.id,
                      lead.status,
                      lead.notes
                    )
                  }
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Save
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}