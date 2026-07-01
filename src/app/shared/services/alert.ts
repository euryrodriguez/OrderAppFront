import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})

export class AlertService {
  loading(title = 'Procesando...') {
    Swal.fire({
      title,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }
  close() {
    Swal.close();
  }
  success(title: string, text?: string) {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }
  error(title: string, text?: string) {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }
  warning(title: string, text?: string) {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }
  info(title: string, text?: string) {
    return Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }
  confirm(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#1976d2',
      cancelButtonColor: '#d32f2f'
    });
  }
}
