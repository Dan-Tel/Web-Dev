import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface IProduct {
  img: string;
  name: string;
  description: string;
  rating: string;
  link: string;
}

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor() {
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hda/86473699819550.png?format=preview-large',
      name: 'Apple iPad Pro 2024',
      description:
        'Apple iPad Pro 2024 Wi-Fi 13 нанотекстурный 13 дюйм 16 Гб/2000 Гб черный',
      rating: '4.95⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-13-nanoteksturnyi-13-djuim-16-gb-2000-gb-chernyi-121144868/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb черный',
      rating: '4.75⭐⭐⭐⭐⭐(387)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      name: 'Apple iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb золотистый',
      rating: '4.95⭐⭐⭐⭐⭐(515)',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      name: 'LG F2J3NS0W',
      description: 'Стиральная машина LG F2J3NS0W белый',
      rating: '4.72⭐⭐⭐⭐⭐(852)',
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      name: 'Яндекс Станция Лайт 2',
      description: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      rating: '4.95⭐⭐⭐⭐⭐(695)',
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'MacBook Air 13 2022',
      description:
        'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      rating: '4.55⭐⭐⭐⭐⭐(106)',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h67/84375762599966.jpg?format=gallery-medium',
      name: 'ThundeRobot Zero G3 Ultra',
      description:
        'Ноутбук ThundeRobot Zero G3 Ultra 16" / 32 Гб / SSD 2048 Гб / Win 11 /',
      rating: '4.80⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
      name: 'Стул C06',
      description: 'Стул C06, 80x46x40 см, белый',
      rating: '4.95⭐⭐⭐⭐⭐(1222)',
      link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
      name: 'TP-LINK TD-W8961N',
      description: 'Wi-Fi роутер TP-LINK TD-W8961N',
      rating: '4.67⭐⭐⭐⭐⭐(172)',
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000',
    });
    this.products.push({
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h81/hd6/63970146680862.jpg?format=gallery-medium',
      name: 'ФрутоНяня',
      description: 'Детское пюре ФрутоНяня яблоко, абрикос, сливки 90 г',
      rating: '4.87⭐⭐⭐⭐⭐(6)',
      link: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-abrikos-slivki-90-g-100975503/?c=750000000',
    });
  }
}
