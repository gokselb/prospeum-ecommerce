import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingItem } from 'src/app/models/loading.model';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public state: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private loadingItems: LoadingItem[] = [];

  public start(): LoadingItem {
    const item: LoadingItem = {
      id: this.getId()
    };
    item.stop = () => {
      const index = this.loadingItems.findIndex(val => val.id === item.id);
      this.loadingItems.splice(index, 1);
      this.checkStatus();
    };

    this.loadingItems.push(item);
    this.checkStatus();
    return item;
  }

  private getId(): number {
    return Math.floor(Math.random() * 9000 + 1000);
  }

  private checkStatus(): void {
    this.state.next(this.loadingItems.length > 0);
  }
}
