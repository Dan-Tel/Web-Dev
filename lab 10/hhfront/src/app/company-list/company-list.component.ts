import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Company } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [RouterLink],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css',
})
export class CompanyListComponent implements OnInit {
  apiService = inject(ApiService);
  companies: Company[] = [];

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }
}
