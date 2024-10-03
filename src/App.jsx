import "./App.css";
import ContactInput from "./containers/Contactinput";
import ContactList from "./containers/Contactlist";

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Contact Apps</h1>
        <h2>Add New Contact</h2>
        <ContactInput />
        <ContactList />
      </div>
    </>
  );
}

export default App;
