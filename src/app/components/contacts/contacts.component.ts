import {Component, OnInit} from '@angular/core';
import {IContact} from "../../models/IContact";
import {ContactService} from "../../services/contact.service";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {NgForm} from "@angular/forms";
import {EditContactComponent} from "./edit-contact/edit-contact.component";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[]
  showValidationErrors: boolean

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getAllContacts()
  }

  onFormSubmit(form: NgForm) {
    console.log(form.invalid);
    if (form.invalid) return this.showValidationErrors = true
    console.log(form.value);
    this.contactService.addContact(form.value as IContact)
    this.showValidationErrors = false
    form.reset()
  }

  // toggleCompleted(contact: IContact){
  //   contact.completed = !contact.completed;
  // }
  editContact(contact: IContact) {
    const id = this.contacts.indexOf(contact)

    let dialogRef = this.dialog.open(EditContactComponent, {
      width: '700px',
      data: contact
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contactService.updateContact(id, result)
      }
    })
  }

  deleteTode(contact: IContact) {
    const id = this.contacts.indexOf(contact)
    this.contactService.deleteContact(id)
  }


}
