import { Component, OnInit  } from '@angular/core';
import { RosterService } from './roster.service';
import { Roster } from './roster.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [],
  imports: [CommonModule, RouterModule],
  standalone: true,
})

export class RosterComponent implements OnInit {
  roster:Observable<Roster[]> = new Observable<Roster[]>();

  constructor(private rosterService: RosterService, private http: HttpClient) {}

  ngOnInit() {
    // this.rosterService.getRoster().subscribe((data: Roster[]) => {
    //   this.roster = data
      
    //   console.log(this.roster)
    // });
    // this.http.get<any[]>('/api/roster').subscribe((data) => {
    //     this.roster = data
        
    //     console.log(this.roster)
    //   });
    this.roster = this.rosterService.getRoster()
  }
}
