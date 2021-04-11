import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorRanking } from 'src/app/model/doctorRanking';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-body-table-filter-ranking',
  templateUrl: './body-table-filter-ranking.component.html',
  styleUrls: ['./body-table-filter-ranking.component.scss']
})
export class BodyTableFilterRankingComponent implements OnInit {

  @Input() doctorsList: Array<DoctorRanking> = new Array<DoctorRanking>();

  constructor(private doctorService: DoctorService, private routes: Router) { }

  ngOnInit(): void {
  }
  viewDoctor(doctor:Doctor)
  {
    this.doctorService.setDoctor(doctor);
    this.routes.navigateByUrl('admin/doctor/perfil/ranking');
  }
}
