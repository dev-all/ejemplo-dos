import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isShowSidebar!: boolean ;
  currentScreenSize = '';
  orientation = '';
  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
    ['(orientation: portrait)', 'Portrait'],
    ['(orientation: landscape)', 'Landscape'],
  ]);

  isLoading: boolean = true;
  color: ThemePalette = 'accent';
  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {

    /// Spinner for lazyload modules
    router.events.forEach((event) => {

      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;

      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;

      }
    });


    breakpointObserver
        .observe([
          Breakpoints.XSmall, //0-600
          Breakpoints.Small,  //960
          Breakpoints.Medium, //1280
          Breakpoints.Large,  //1920
          Breakpoints.XLarge, //+
        ])
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              console.log(query);
              this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            }
          }
        });
        breakpointObserver
        .observe(['(orientation: portrait)', '(orientation: landscape)'])
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              console.log(query);
              this.orientation = this.displayNameMap.get(query) ?? 'Unknown';
            }
          }
        });





  }

    ngOnInit(): void {

       // solo se visualiza cuando se recarga la pagina base
    // por ende no es para todos los view
    setTimeout(() => {
      this.isLoading = false;
      }, 1000);


      this.breakpointObserver
      .observe([
                Breakpoints.XSmall, //0-600
                Breakpoints.Small,  //960
                Breakpoints.Medium, //1280
                Breakpoints.Large,  //1920
                Breakpoints.XLarge, //+
              ])
      .subscribe((result) => {
        this.isShowSidebar = false;
        if(result.breakpoints[Breakpoints.Small,Breakpoints.XSmall]){
          this.isShowSidebar = true;
        }
      });
    }

}
