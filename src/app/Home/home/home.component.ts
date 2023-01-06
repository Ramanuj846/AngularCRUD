import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from 'src/app/Service/crudservice.service';
import { DatePipe } from '@angular/common';
import { FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDataAvailable:boolean=true
  dataStored: any[]=[];
  mensRecordForm: any;
  updateMensRecordForm: any;
  patchRecord:any;
  editData: any;
  tabId:any;
  constructor(private crudService:CrudserviceService,
     private formbuilder:FormBuilder)
    { 
      this.mensRecordForm=this.formbuilder.group({
        ranking:[''],
        names:[''],
        country:[''],
        score:['']
      })

      this.updateMensRecordForm=this.formbuilder.group({
        ranking:[''],
        names:[''],
        country:[''],
        score:['']
      })
    }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords()
  {
    this.crudService.getAllMensRecord()
    .subscribe({
      next:(res)=>
      {
        // alert('Fetched Sucessfully')
        this.dataStored=res;
        console.log(this.dataStored)
      },
      error:()=>
      {
        alert("Error While Fectching the data");
      }
    })
  }

  ceateMensRecord()
  {
    this.crudService.postMenRecord(this.mensRecordForm.value).subscribe({
    next:(res)=>
    {
      alert("Data Created Sucessfully");
      this.getAllRecords();
      console.log(this.mensRecordForm.value)
    },
    error:(error)=>
    {
      alert("Error Encountered During Creation")
    }
    })
  }

  updateMensPatch(item:any,id:any)
  {
    this.tabId=id;
     this.patchRecord=item;

    setTimeout(()=>{
      const formValue=this.updateMensRecordForm;
      formValue.patchValue({
        ranking:this.patchRecord.ranking,
        names:this.patchRecord.name,
        country:this.patchRecord.country,
        score:this.patchRecord.score,
        id:id
      })
    },1000)


  }

  updateRecord()
  {
    
    this.crudService.updateMensRecord(this.updateMensRecordForm.value,this.tabId)
    .subscribe({
      next:(res)=>
      {
        alert("Mens Record Updated Sucessfully");
        this.updateMensRecordForm.reset();
      },
      error:(e)=>{
        alert("Error while updating Record");
      }
    })
    
  }

}
