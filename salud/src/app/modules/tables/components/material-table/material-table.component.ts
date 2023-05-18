import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models';
import { Subscription } from 'rxjs';
import { TablesService } from '../../services';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  materialTableDate: Customer[]=[];
  customerSubscription!: Subscription;
  //@Input() materialTableDate: Customer[];
  public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
  public dataSource!: Customer[];
  constructor(private service: TablesService) {  }

  public ngOnInit() {
    // aqui se subscribe al servicio que es quien comparte el rultado
    this.customerSubscription =  this.service.loadMaterialTableData().subscribe((result: any) => {
      //console.log('estoy en result-anime-componet', result);
      this.materialTableDate = result;
    });
    this.dataSource = this.materialTableDate;
  }
}
