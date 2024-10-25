import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productosCarrito: any[] = [];
  carritoVisible: boolean = false;
  productos: any[] = [];
  terminoBusqueda: string = '';
  productosFiltrados: any[] = [];

  constructor(private productoService: ProductoService, private carritoService: CarritoService) { }
  mostrarCarrito() {
    this.carritoVisible = !this.carritoVisible;
  }

  async ngOnInit() {
    try {
      this.productos = await this.productoService.getAll();
      console.log('Productos cargados en el componente:', this.productos);
      this.filtrarProductos();
    } catch (error) {
      console.error('Error al cargar los productos', error);
    }
  }

  filtrarProductos() {
    if (!this.terminoBusqueda) {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(producto => 
        producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    }
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }

  onSearchChange(searchValue: string) {
    this.terminoBusqueda = searchValue;
    this.filtrarProductos();
  }
}
