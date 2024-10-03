import Input from "../components/form/input";
import * as React from "react";

export default function ContactInput() {
  const formRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    const form = formRef.current;

    e.preventDefault();

    const contactData = {
      name: form["name"].value.trim(),
      email: form["email"].value.trim(),
      img_url:
        form["img_url"].value || "https://dummyjson.com/icon/michaels/70",
    };

    console.log("Submitting data:", contactData);
    setLoading(true);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/contacts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        console.error("Error details:", data);
        throw new Error("Failed to submit contact");
      }

      console.log("Contact submitted:", data);

      form.reset();
    } catch (error) {
      console.error("Error submitting contact:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-input">
        <form className="contact_form" ref={formRef}>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" name="email" />
          <Input placeholder="Image URL" name="img_url" />
          <button
            className="add_button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add"}
          </button>
        </form>
      </section>
    </>
  );
}
