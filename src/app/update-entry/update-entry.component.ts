import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material/dialog';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<UpdateEntryComponent>,
    @Inject(MAT_DIALOG_DATA) {Description, IsExpense, Value, Id},
    private service: EntryService) 
    { 
        this.id = Id;

        this.form = fb.group({
              description: [Description, Validators.required],
              isExpense: [IsExpense, Validators.required],  
              value: [Value, Validators.required],
        });
        
    }

  ngOnInit(): void {
  }

  types: Type[] = [
    { value: true, display: "Expense"}, 
    { value: false, display: "Income"}
  ]

  close(){    
    this.dialogRef.close();
   }

  save(){
    this.form.value.id = this.id;   
    this.service.updateEntry(this.id, this.form.value).subscribe((data) => {
      console.log("Data: ", data);
      window.location.reload();
    });    
  }
}
