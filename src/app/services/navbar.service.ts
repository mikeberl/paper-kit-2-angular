import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private selectedItemIndexSubject = new BehaviorSubject<number>(0);
  selectedItemIndex$: Observable<number> = this.selectedItemIndexSubject.asObservable();

  selectMenuItem(index: number) {
    this.selectedItemIndexSubject.next(index);
  }
}
