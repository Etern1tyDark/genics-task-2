import Contactitem from "../components/ContactItem";
import * as React from "react";

export default function ContactList() {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/contacts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      });
      const data = await response.json();
      setContacts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="contact-list">
        <h2>Contact List</h2>
        {contacts.map((contact) => (
          <Contactitem
            key={contact.id}
            name={contact.name}
            email={contact.email}
            imgUrl={contact.img_url}
          />
        ))}
      </section>
    </>
  );
}
