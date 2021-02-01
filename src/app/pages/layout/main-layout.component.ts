import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/utils/loading.service';

@Component({
  selector: 'app-pe-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  public isLoading$: Observable<boolean>;
  public constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.state;
  }

}
