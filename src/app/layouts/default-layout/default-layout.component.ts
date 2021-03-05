import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { AppService } from '@app/services';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass']
})
export class DefaultLayoutComponent implements OnInit {
  
  constructor(
    private _appService:AppService
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
  }
  onOpenedChange(status:any){
    console.log('status', status)
  }
}
