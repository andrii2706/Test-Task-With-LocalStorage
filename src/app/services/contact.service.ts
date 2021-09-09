import {Injectable} from '@angular/core';
import {IContact} from "../models/IContact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactKey = 'contact'

  constructor() {
  }

  // contacts: IContact[]

  getAllContacts(): IContact[] {
    const candidate = localStorage.getItem(this.contactKey) || '';
    return candidate.length ? JSON.parse(candidate) : [];
    // return this.contacts
  }

  addContact(contact: IContact): void {
    console.log(contact);
    const allContacts = this.getAllContacts();
    const iContacts = allContacts.sort((a, b) => b.id - a.id);
    let lastId = iContacts.length?iContacts[0].id : 0;
    allContacts.push({...contact, id: ++lastId})
    localStorage.setItem(this.contactKey, JSON.stringify(allContacts))
  }

  updateContact(id: number, updatedContact: IContact) {
    const allContacts = this.getAllContacts();
    const contact = allContacts.find(value => value.id === id);
    Object.assign(contact, updatedContact)
    localStorage.setItem(this.contactKey, JSON.stringify(allContacts))
  }

  deleteContact(id: number) {
  const allContacts = this.getAllContacts();
  const contact = allContacts.filter(value => value.id !== id);
  localStorage.setItem(this.contactKey, JSON.stringify(contact))
  }
}
