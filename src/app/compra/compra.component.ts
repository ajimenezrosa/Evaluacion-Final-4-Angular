import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CompraService } from '../compra.service'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  productos : Object[];

  constructor(private compraService: CompraService) {

  }

  ngOnInit() {
    this.productos = this.compraService.carrito;
  }

}
