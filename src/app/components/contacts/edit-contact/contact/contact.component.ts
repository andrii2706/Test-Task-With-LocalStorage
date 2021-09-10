import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../../../../models/IContact";
import {ContactService} from "../../../../services/contact.service";
import {EditContactComponent} from "../edit-contact.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
 contact:IContact

  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClieked: EventEmitter<void> = new EventEmitter()

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.onEditClicked()
  }


  onEditClicked() {
 this.editClicked.emit()
  }
  onDeletedClick(){
    this.deleteClieked.emit()
  }

}
