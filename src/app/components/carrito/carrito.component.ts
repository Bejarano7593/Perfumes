import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosCarrito: any[] = [];
  carritoVisible: boolean = false;
  formularioVisible: boolean = false;
  compraExitosa: boolean = false;

  datosCompra = {
    metodoPago: '',
    numeroTarjeta: '',
    codigoSeguridad: '',
    fechaExpiracion: '',
    direccionEnvio: '',
    correoConfirmacion: ''
  };

  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit() {
    this.productosCarrito = this.carritoService.obtenerCarrito();
  }

  mostrarCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }

  aumentarCantidad(producto: any) {
    this.carritoService.aumentarCantidad(producto);
    this.actualizarCarrito();
  }

  disminuirCantidad(producto: any) {
    this.carritoService.disminuirCantidad(producto);
    this.actualizarCarrito();
  }

  eliminarDelCarrito(producto: any) {
    this.carritoService.eliminarProducto(producto);
    this.actualizarCarrito();
  }

  calcularTotal() {
    return this.carritoService.calcularTotal();
  }

  procesarCompra() {
    this.carritoVisible = false;
    this.formularioVisible = true;
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.actualizarCarrito();
    this.carritoVisible = false;
  }

  cerrarCarrito() {
    this.carritoVisible = false;
  }

  cerrarFormulario() {
    this.formularioVisible = false;
  }

  enviarFormulario() {
    this.compraExitosa = true;
    this.vaciarCarrito();
  }

  volverAlMenu() {
    this.router.navigate(['/home']);
    this.compraExitosa = false;
    this.formularioVisible = false;
  }

  private actualizarCarrito() {
    this.productosCarrito = this.carritoService.obtenerCarrito();
  }
}
