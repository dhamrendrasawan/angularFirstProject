import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, switchMap } from 'rxjs';

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}
@Component({
  selector: 'app-observabledemo3',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './observabledemo3.component.html',
  styleUrl: './observabledemo3.component.css'
})
export class Observabledemo3Component {
  searchResult$: Observable<PeopleData> | undefined;

  search = new FormControl();

  searchFormGroup = new FormGroup({
    search: this.search,
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.search.valueChanges)
    
    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
        ({
          name: response.name,
          birthYear: response.birth_year,
          height: Number(response.height),
          weight: Number(response.mass),
          eyeColor: response.eye_color,
        } as PeopleData)
      )
    );
  }

}
