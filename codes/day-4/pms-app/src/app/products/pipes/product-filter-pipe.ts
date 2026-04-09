import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productfilter',
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: readonly Product[], ...args: any[]): readonly Product[] {
    const filterValue = args[0] as string
    if (filterValue === '')
      return value
    else
      return value.filter(
        (p) => p.productName
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
  }
}
