import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../products/products.component';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() p!: IProduct;
  @Output() delete = new EventEmitter();
  @Output() like = new EventEmitter();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onLike(id: number) {
    this.like.emit(id);
  }
}
