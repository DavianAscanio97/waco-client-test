import { Pipe, PipeTransform } from '@angular/core';
interface Users {
  _id: string,
  username: string;
  email: string;
}
@Pipe({ name: 'listFilter' })
export class ListFilterPipe implements PipeTransform {

  transform(list: Users[], filterText: string): Users[] {
    return list ? list.filter(item => item.username.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
