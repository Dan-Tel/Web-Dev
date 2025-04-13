import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getCompanies() {
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies/');
  }

  getVacancies(companyId: string | null) {
    return this.http.get<Vacancy[]>(
      `http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`
    );
  }
}
