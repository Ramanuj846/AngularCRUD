import {AfterViewInit, Component,Inject,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/Dialog/dialog/dialog.component';
import { CrudserviceService } from 'src/app/Service/crudservice.service';
import { DatePipe } from '@angular/common';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
@Component({
  selector: 'app-mens-data',
  templateUrl: './mens-data.component.html',
  styleUrls: ['./mens-data.component.css']
})
export class MensDataComponent implements OnInit {

  displayedColumns: string[] = ['ranking', 'name', 'dob', 'country', 'score', 'events','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( 
    private dialog: MatDialog,
    private crudService:CrudserviceService,
    private datePipe: DatePipe, )
   { }

  ngOnInit(): void {
    this.getAllRecords();

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:"50%"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==='save')
      this.getAllRecords();
    });
  }

  getAllRecords()
  {
    this.crudService.getAllMensRecord()
    .subscribe({
      next:(res)=>
      {
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
        alert('Fetched Sucessfully')
        console.log(res);
      },
      error:()=>
      {
        alert("Error While Fectching the data");
      }
    })
  }

  editRecords(row:any)
  {
    this.dialog.open(DialogComponent,{
      width:'50%',
      data:row
    }).afterClosed().subscribe(result =>{
      if(result==='updated')
      {
        this.getAllRecords();
      }
    })
  }

  deleteRecords(id:number)
  {
    this.crudService.deleteMensRecord(id).subscribe({
      next:(res)=>
      {
        alert("Deleted Sucessfully");
      },
      error:()=>
      {
        alert("Error Occur While Deleting the Record");
      }
    })
  }


}

// export class DialogComponent {}