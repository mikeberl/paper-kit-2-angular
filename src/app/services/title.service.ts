import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject = new BehaviorSubject<string>('Default Title');
  public title$: Observable<string> = this.titleSubject.asObservable();

  updateTitle(title: string): void {
    this.titleSubject.next(title);
  }

  constructor() { }
}
