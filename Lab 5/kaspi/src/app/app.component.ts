import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { IProduct, ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [NgFor, RouterOutlet, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kaspi';

  categoryNames: string[] = [
    'Телефоны',
    'Бытовая Техника',
    'Телевизоры',
    'Детские Товары',
  ];
  products: IProduct[] = [];
  currentCategory: string = 'Телефоны';

  constructor() {
    this.products.push({
      id: 0,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13',
      category: 'Телефоны',
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 1,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      category: 'Телефоны',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 2,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      category: 'Телефоны',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 3,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      category: 'Телефоны',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 4,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium',
      name: 'Apple iPhone 13',
      category: 'Телефоны',
      description: 'Смартфон Apple iPhone 13 128Gb зеленый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
      likes: 0,
    });

    this.products.push({
      id: 5,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      name: 'Deerma DX700',
      category: 'Бытовая Техника',
      description: 'Пылесос Deerma DX700 белый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 6,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=gallery-medium',
      name: 'Deerma DX700S',
      category: 'Бытовая Техника',
      description: 'Пылесос Deerma DX700S серый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/deerma-dx700s-seryi-100680527/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 7,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      name: 'LG F2J3NS0W',
      category: 'Бытовая Техника',
      description: 'Стиральная машина LG F2J3NS0W белый',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 8,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
      name: 'AVA MMWO-2070B',
      category: 'Бытовая Техника',
      description: 'Микроволновая печь AVA MMWO-2070B черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 9,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      name: 'Yingzheng ZY-305',
      category: 'Бытовая Техника',
      description: 'Электрочайник Yingzheng ZY-305 черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
      likes: 0,
    });

    this.products.push({
      id: 10,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-medium',
      name: 'Yasin 43G11',
      category: 'Телевизоры',
      description: 'Телевизор Yasin 43G11 109 см черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 11,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hdf/80548027924510.png?format=gallery-medium',
      name: 'SMART 32G7000',
      category: 'Телевизоры',
      description: 'Телевизор SMART 32G7000 81 см черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/smart-32g7000-81-sm-chernyi-109729462/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 12,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/pfb/pee/19867319.jpg?format=gallery-medium',
      name: 'Yasin 32G11',
      category: 'Телевизоры',
      description: 'Телевизор Yasin 32G11 81 см черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/yasin-32g11-81-sm-chernyi-108448090/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 13,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h00/hf2/86215715848222.jpg?format=gallery-medium',
      name: 'Xiaomi A 2025 L50MA-ARU',
      category: 'Телевизоры',
      description: 'Телевизор Xiaomi A 2025 L50MA-ARU 127 см черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l50ma-aru-127-sm-chernyi-120147296/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 14,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      name: 'Samsung UE43T5300AUXCE',
      category: 'Телевизоры',
      description: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000',
      likes: 0,
    });

    this.products.push({
      id: 15,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h5c/84670928420894.jpg?format=gallery-medium',
      name: 'BAFURI XL',
      category: 'Детские Товары',
      description: 'Трусики BAFURI XL, 5, 42 шт',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/trusiki-bafuri-xl-5-42-sht-115199086/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 16,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h05/63774630805534.jpg?format=gallery-medium',
      name: 'Yokosun XL',
      category: 'Детские Товары',
      description: 'Трусики Yokosun XL, 38 шт',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/trusiki-yokosun-xl-38-sht-16200264/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 17,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h34/80721531830302.jpg?format=gallery-medium',
      name: 'Tilashar',
      category: 'Детские Товары',
      description: 'Обучающий набор Tilashar пластик, картон',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/obuchajuschii-nabor-tilashar-plastik-karton-110318230/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 18,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6f/7243034.jpg?format=gallery-medium',
      name: 'Gerber',
      category: 'Детские Товары',
      description: 'Детское пюре Gerber чернослив 80 г',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'http://kaspi.kz/shop/p/gerber-chernosliv-80-g-19800057/?c=750000000',
      likes: 0,
    });
    this.products.push({
      id: 19,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hc2/63774675697694.jpg?format=gallery-medium',
      name: 'Yokosun L',
      category: 'Детские Товары',
      description: 'Подгузники Yokosun L, 54 шт',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/podguzniki-yokosun-l-54-sht-16200253/?c=750000000',
      likes: 0,
    });
  }

  getCurrentCategoryProducts() {
    return this.products.filter(
      (p: IProduct) => p.category === this.currentCategory
    );
  }

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  onDelete(id: number) {
    this.products = this.products.filter(
      (product: IProduct) => product.id !== id
    );
  }

  onLike(id: number) {
    this.products.map((product: IProduct) => {
      if (product.id === id) {
        product.likes++;
      }
    });
  }
}
