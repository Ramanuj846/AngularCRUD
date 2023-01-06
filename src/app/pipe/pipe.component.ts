import { Component, OnInit } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title:string="shyamlal"

  constructor() { }

  ngOnInit(): void {
  }


}


