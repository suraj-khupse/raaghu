import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MfeBaseComponent } from '@libs/shared';
import { Observable } from 'rxjs/internal/Observable';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'rds-comp-address-input',
  templateUrl: './rds-comp-address-input.component.html',
  styleUrls: ['./rds-comp-address-input.component.scss'],
})
export class RdsAddressInputComponent extends MfeBaseComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private ij: Injector) {
    super(ij)
  }

  userData$: Observable<any>;

  authToken: string;
  countries: string[];
  states: string[];
  cities: string[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      address: [null],
      address2: [null],
      country: [null],
      state: [null],
      city: [null],
      zip: [null],
    });

    this.userData$ = this.on('login');

    this.loadCountries().subscribe((countries: any[]) => {
      this.countries = countries.map((r) => r.country_name);
    });

    this.form.controls['country'].valueChanges.subscribe((value) => {
      if (value) {
        this.form.patchValue({
          state: null,
          city: null,
        });
        this.cities = [];
        this.states = [];
        this.loadStates(value).subscribe((states: any[]) => {
          this.states = states.map((r) => r.state_name);
        });
      }
    });

    this.form.controls['state'].valueChanges.subscribe((value) => {
      if (value) {
        this.form.patchValue({
          city: null,
        });
        this.cities = [];
        this.loadCities(value).subscribe((cities: any[]) => {
          this.cities = cities.map((r) => r.city_name);
        });
      }
    });
  }

  onSubmit() {}

  loadStates(country: string) {
    return this.http.get(
      `https://www.universal-tutorial.com/api/states/${country}`,
      {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          Accept: 'application/json',
        },
      }
    );
  }

  loadCities(state: string) {
    return this.http.get(
      `https://www.universal-tutorial.com/api/cities/${state}`,
      {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          Accept: 'application/json',
        },
      }
    );
  }

  loadCountries() {
    return this.http
      .get('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: {
          Accept: 'application/json',
          'api-token':
            'rwkXvna09o4o_AE2gOisWY4Wp0ngKFCM2peu2qvrRvwRvFSDf96U4Nl_dw4jZiMdOs0',
          'user-email': 'apoorva.lele@waiin.com',
        },
      })
      .pipe(
        mergeMap((x: any) => {
          this.authToken = x.auth_token;
          return this.http.get(
            'https://www.universal-tutorial.com/api/countries/',
            {
              headers: {
                Authorization: `Bearer ${x.auth_token}`,
                Accept: 'application/json',
              },
            }
          );
        })
      );
  }
}
