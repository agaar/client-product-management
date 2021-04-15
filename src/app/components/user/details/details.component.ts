import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId!: string;
  currentProduct: Product;

  constructor(private route: ActivatedRoute) {
    this.currentProduct = JSON.parse(localStorage.getItem("currentProduct") || '{}');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.productId = params.get('id');
      }
    });
  }

}