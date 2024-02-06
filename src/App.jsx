import "./App.css";
import { useState } from "react";
import contactsJson from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  const randomContact = () => {
    const randomContactIndex = Math.floor(Math.random() * contactsJson.length);
    setContacts([...contacts, contactsJson[randomContactIndex]]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={randomContact}>Add a Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="contact" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : " "}</td>
              <td>{contact.wonEmmy ? "🌟" : " "}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
