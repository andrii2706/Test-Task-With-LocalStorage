import { Component, OnInit } from '@angular/core';
import {IContact} from "../../models/IContact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: IContact[]
  showValidationErrors: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
