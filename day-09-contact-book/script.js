// Day 09 – Contact Book
// Searches contacts by name, prints the result, updates a phone number, and adds a new contact.
import { ask } from "../utils/input.js";

const contacts = [
  {
    name: "Ana Silva",
    phone: "555-0101",
    email: "ana@example.com",
    address: { city: "Toronto", country: "Canada" },
  },
  {
    name: "Beto Cruz",
    phone: "555-0102",
    email: "beto@example.com",
    address: { city: "New York", country: "USA" },
  },
  {
    name: "Carla Reyes",
    phone: "555-0103",
    email: "carla@example.com",
    address: { city: "Delhi", country: "India" },
  },
];

function findContact(name) {
  return contacts.find((c) => c.name === name);
}

function addContact(contact) {
  contacts.push(contact);
}

async function main() {
  const searchName = await ask("Enter a name to search: ");
  const foundContact = findContact(searchName);

  if (!foundContact) {
    console.log(`${searchName} not found in contacts.`);
  } else {
    const { name, phone, email } = foundContact;
    console.log(`${name} | ${phone} | ${email}`);
    foundContact.phone = "555-9999";
    console.log(
      `Updated: ${foundContact.name} | ${foundContact.phone} | ${foundContact.email}`,
    );
  }

  addContact({
    name: "Dev Patel",
    phone: "555-0104",
    email: "dev@example.com",
    address: { city: "Vancouver", country: "Canada" },
  });
}

main();
