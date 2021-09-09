import { Injectable } from '@angular/core';
import {IContact} from "../models/IContact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contacts:IContact[]

  getAllContacts() {
    return this.contacts
  }
  addContact(contact: IContact){
    this.contacts.push(contact)
  }
  updateContact(id:number, updatedContact: IContact){
this.contacts[id] = updatedContact
  }
  deleteContact(id:number){
    this.contacts.splice(id,1)
  }
}
