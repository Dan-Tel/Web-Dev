import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy-list',
  imports: [],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css',
})
export class VacancyListComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);

  vacancies: Vacancy[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.apiService.getVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
    });
  }
}
