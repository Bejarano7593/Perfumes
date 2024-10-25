import { Component } from '@angular/core';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen';
  carritoCount: number = 0;
  terminoBusqueda: string = '';

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.actualizarContadorCarrito();
  }

  actualizarContadorCarrito() {
    this.carritoCount = this.carritoService.obtenerCarrito().length;
  }
}
