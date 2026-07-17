interface CustomerConfirmationEmailProps {
  name: string;
}

export default function CustomerConfirmationEmail({
  name,
}: CustomerConfirmationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f4f4f4",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "35px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              margin: 0,
              fontSize: "30px",
            }}
          >
            EstateOne Realtors
          </h1>

          <p
            style={{
              color: "#D1D5DB",
              marginTop: "10px",
            }}
          >
            Thank You For Your Enquiry
          </p>
        </div>

        <div
          style={{
            padding: "40px",
          }}
        >
          <h2
            style={{
              color: "#111827",
              marginTop: 0,
            }}
          >
            Hello {name},
          </h2>

          <p
            style={{
              color: "#4B5563",
              lineHeight: "30px",
            }}
          >
            Thank you for showing interest in
            <strong> Kolte Patil Vyana.</strong>
          </p>

          <p
            style={{
              color: "#4B5563",
              lineHeight: "30px",
            }}
          >
            Our Relationship Manager has received your enquiry and
            will contact you shortly to help you with:
          </p>

          <ul
            style={{
              color: "#374151",
              lineHeight: "30px",
            }}
          >
            <li>Latest Price Sheet</li>
            <li>Floor Plans</li>
            <li>Launch Offers</li>
            <li>Project Details</li>
            <li>Site Visit Booking</li>
          </ul>

          <div
            style={{
              marginTop: "35px",
              background: "#FFF8E7",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <strong>EstateOne Realtors</strong>

            <p>📞 +91 70380 48382</p>

            <p>📞 +91 77095 42407</p>

            <p>✉ estateonerealtors.pune@gmail.com</p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <a
              href="https://wa.me/917038048382"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#ffffff",
                textDecoration: "none",
                padding: "16px 40px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              Chat On WhatsApp
            </a>
          </div>
        </div>

        <div
          style={{
            background: "#F9FAFB",
            padding: "20px",
            textAlign: "center",
            color: "#6B7280",
            fontSize: "13px",
          }}
        >
          © {new Date().getFullYear()} EstateOne Realtors
        </div>
      </div>
    </div>
  );
}