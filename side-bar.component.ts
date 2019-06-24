import { Component, OnInit, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  //public isMinimizable:boolean = false;
  @Output() appMimimizeSidebar = new EventEmitter<boolean>();

  isMinimizable:boolean = false;

  constructor(private _router: Router, private _elm: ElementRef) { }

  isActive(url: string): boolean {
    return url == this._router.url;
  }

  ngAfterViewInit() {
    this._elm.nativeElement.querySelector('.expand-collapse-menu button').addEventListener('click', this.setPanelSize.bind(this));
  }

  setPanelSize() {
    this.isMinimizable = !this.isMinimizable;
    this.appMimimizeSidebar.emit(this.isMinimizable); 
    this._elm.nativeElement.querySelector('.expand-collapse-menu button').innerHTML = this.isMinimizable ? `<i title="Expand" class="fa fa-expand"></i>` : `<i title="Collapse" class="fa fa-compress"></i>`;
  }

  ngOnInit() {
  }

}
