import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  category: string;
  description: string;
  rating: string;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-products',
  imports: [NgFor, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() products!: IProduct[];
  @Output() delete = new EventEmitter();
  @Output() like = new EventEmitter();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onLike(id: number) {
    this.like.emit(id);
  }
}
