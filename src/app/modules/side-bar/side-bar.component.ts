import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private _open: boolean = false;

  private _toggleSidebar() {
    this._open = !this._open;
  }

  constructor() { }

  ngOnInit() {
  }

}
