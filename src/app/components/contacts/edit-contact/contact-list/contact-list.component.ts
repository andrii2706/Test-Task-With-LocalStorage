import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../../../../models/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input()
  contact: IContact



  constructor() { }

  ngOnInit(): void {
  }

}
