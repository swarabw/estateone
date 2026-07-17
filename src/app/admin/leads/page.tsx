"use client";

import { useEffect, useMemo, useState } from "react";
import LeadTable from "@/components/admin/LeadTable";

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

export default function LeadsPage() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    setLoading(true);

    try {
      const response = await fetch("/api/leads/list");

      const data = await response.json();

      setLeads(data.leads || []);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  async function saveLead(
    id: string,
    status: string,
    notes: string
  ) {
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          notes,
        }),
      });

      loadLeads();

    } catch (error) {
      console.error(error);
    }
  }

  function updateLead(
    id: string,
    field: "status" | "notes",
    value: string
  ) {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              [field]: value,
            }
          : lead
      )
    );
  }

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        lead.phone.includes(search) ||
        (lead.email || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Loading Leads...
      </div>
    );
  }

  return (
    <div>

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Lead Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all incoming enquiries
          </p>

        </div>

        <div className="rounded-xl bg-white px-6 py-4 shadow">

          <p className="text-gray-500">
            Total Leads
          </p>

          <h2 className="text-4xl font-bold">
            {filteredLeads.length}
          </h2>

        </div>

      </div>

      <div className="mb-8 flex gap-4 rounded-2xl bg-white p-6 shadow">

        <input
          placeholder="Search Name / Phone / Email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 rounded-xl border p-3"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="rounded-xl border p-3"
        >
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Site Visit Scheduled</option>
          <option>Site Visit Done</option>
          <option>Negotiation</option>
          <option>Booked</option>
          <option>Lost</option>
        </select>

      </div>

      <LeadTable
        leads={filteredLeads}
        updateLead={updateLead}
        saveLead={saveLead}
      />

    </div>
  );
}