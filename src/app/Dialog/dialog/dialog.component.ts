import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudserviceService } from 'src/app/Service/crudservice.service';
import {MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  mensrecordForm!:FormGroup;
  actionButton:string='Save';
  constructor(private dialog:MatDialog,
    private formBuilder:FormBuilder,
    private crudService:CrudserviceService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private matDialogRef:MatDialogRef<DialogComponent>) { }
  ngOnInit(): void {

    this.mensrecordForm=this.formBuilder.group({
      ranking:['',Validators.required],
      name:['',Validators.required],
      dob:['',Validators.required],
      country:['',Validators.required],
      score:['',Validators.required],
      events:['',Validators.required],
    })

    console.log(this.editData);
    

    if(this.editData)
    {
      this.actionButton="Update";
      this.mensrecordForm.controls['ranking'].setValue(this.editData.ranking);
      this.mensrecordForm.controls['name'].setValue(this.editData.name);
      this.mensrecordForm.controls['dob'].setValue(this.editData.dob);
      this.mensrecordForm.controls['country'].setValue(this.editData.country);
      this.mensrecordForm.controls['score'].setValue(this.editData.score);
      this.mensrecordForm.controls['events'].setValue(this.editData.events);

    }
  }

  addMensRecord()
  {
    if(!this.editData)
    {
      if(this.mensrecordForm.valid)
    {
      this.crudService.postMenRecord(this.mensrecordForm.value)
      .subscribe({
        next:(res)=>
        {
          alert("Record Added Sucessfully")
          this.mensrecordForm.reset();
          this.matDialogRef.close('save');
        },
        error:()=>
        {
          alert("Error While Addding Record")
        }
      })
    }
    }
    else
    {
      this.updateRecord()
      {}
    }
  }

  updateRecord()
  {
    this.crudService.updateMensRecord(this.mensrecordForm.value,this.editData.id)
    .subscribe({
      next:(res)=>
      {
        alert("Mens Record Updated Sucessfully");
        this.mensrecordForm.reset();
        this.matDialogRef.close('updated')
      },
      error:(e)=>{
        alert("Error while updating Record");
      }
    })
    
  }

  

}
