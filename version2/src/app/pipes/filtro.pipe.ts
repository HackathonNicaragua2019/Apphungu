import { Pipe, PipeTransform } from '@angular/core';
import { dic_espaniol } from '../diccionario/dic.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(palabras: dic_espaniol[], texto: string): dic_espaniol[] {
    
    if(texto.length === 0){ return palabras; }

    texto = texto.toLocaleLowerCase();

    return palabras.filter(pala =>{
      
      return pala.espaniol.includes(texto);
      
    });
  }

}
