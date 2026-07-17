interface LeadEmailProps {
  name: string;
  phone: string;
  configuration: string;
  budget: string;
  purpose: string;
  timeline: string;
}

export default function NewLeadEmail({
  name,
  phone,
  configuration,
  budget,
  purpose,
  timeline,
}: LeadEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f5f5f5",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #ececec",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "28px",
            color: "#fff",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            🏡 EstateOne Realtors
          </h1>

          <p
            style={{
              marginTop: "10px",
              opacity: .8,
            }}
          >
            New Premium Property Enquiry
          </p>
        </div>

        <div
          style={{
            padding: "35px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>

              <tr>
                <td><strong>Name</strong></td>
                <td>{name}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>{phone}</td>
              </tr>

              <tr>
                <td><strong>Configuration</strong></td>
                <td>{configuration}</td>
              </tr>

              <tr>
                <td><strong>Budget</strong></td>
                <td>{budget}</td>
              </tr>

              <tr>
                <td><strong>Purpose</strong></td>
                <td>{purpose}</td>
              </tr>

              <tr>
                <td><strong>Timeline</strong></td>
                <td>{timeline}</td>
              </tr>

            </tbody>
          </table>

          <div
            style={{
              marginTop: "35px",
              padding: "20px",
              background: "#FFF8E7",
              borderRadius: "12px",
            }}
          >
            <strong>Project</strong>

            <p>Kolte Patil Vyana</p>

            <strong>Source</strong>

            <p>EstateOne Landing Page</p>
          </div>

        </div>

      </div>
    </div>
  );
}