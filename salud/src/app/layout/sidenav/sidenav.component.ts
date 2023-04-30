import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/data/interfaces/ui/menu.model';
import { MENU } from 'src/app/data/mocks/menu';

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
    this.menuItems = MENU;
  }

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
