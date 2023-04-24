import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/data/interfaces/ui/menu.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isOpenUiElements = true;
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
