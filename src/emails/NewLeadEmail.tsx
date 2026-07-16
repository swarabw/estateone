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
        fontFamily: "Arial",
        padding: "30px",
        background: "#f8f8f8",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "700px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#d4a017",
          }}
        >
          New Property Enquiry
        </h1>

        <hr />

        <table
          style={{
            width: "100%",
            marginTop: "20px",
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

        <hr
          style={{
            marginTop: "30px",
          }}
        />

        <p>
          Lead generated from the
          EstateOne Realtors Landing Page.
        </p>

      </div>
    </div>
  );
}