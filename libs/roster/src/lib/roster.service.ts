// src/app/articles/data-access/services/roster.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roster } from './roster.model';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  private apiUrl = '/api/roster'; // URL to web API

  constructor(private http: HttpClient) {}

  getRoster(): Observable<Roster[]> {
    return this.http.get<Roster[]>(this.apiUrl);
  }
}
