import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IContact} from "../../../models/IContact";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA)
    public contact: IContact
  ) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }
  onEditFormSumbit(form:NgForm){
    if (form.invalid) return
    const updatedContact = {
      ...this.contact,
      ...form.value
    }
    this.dialogRef.close(updatedContact)
  }
}
