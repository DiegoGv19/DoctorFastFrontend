import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-doctor-ranking',
  templateUrl: './view-doctor-ranking.component.html',
  styleUrls: ['./view-doctor-ranking.component.scss']
})
export class ViewDoctorRankingComponent implements OnInit {

  // puedes realizar el pedido del servicio para el promedio de calificacion por mes del doctor aqui o en el mismo componene
  //solo tendrias que enviar el id del doctor, pero seria mejor hacerlo aqui para no enviar el id
  
  constructor() { }
  ngOnInit(): void {

  }

}
