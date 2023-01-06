import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  id:any;
  price:any;
  product:any;
  color:string='';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>
    {
      this.id=params['id'];
      this.price=params['price'];
      this.product=params['product'];
      this.color=params['color'];
    })
  }

}
