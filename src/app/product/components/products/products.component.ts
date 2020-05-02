import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models//product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: '',
      title: 'disco1',
      price: 100,
      description: 'Rock'
    },
    {
      id: '2',
      image: '',
      title: 'disco2',
      price: 100,
      description: 'Rock'
    },
    {
      id: '3',
      image: '',
      title: 'disco3',
      price: 100,
      description: 'Rock'
    },
    {
      id: '4',
      image: '',
      title: 'disco4',
      price: 100,
      description: 'Rock'
    },
    {
      id: '5',
      image: '',
      title: 'disco5',
      price: 100,
      description: 'Rock'
    },
    {
      id: '6',
      image: '',
      title: 'disco6',
      price: 100,
      description: 'Rock'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
