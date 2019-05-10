import { Component, OnInit } from '@angular/core';
import { WeaponService } from 'src/app/services/weapon.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IWeapon } from 'src/app/models/i-weapon';
import { Store } from '@ngrx/store';
import { WeaponAppState } from 'src/app/reducers';
import { AddWeapons } from 'src/app/actions/weapon.action';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})
export class WeaponsListComponent implements OnInit {
  weapons: Observable<IWeapon[]>;

  constructor(
    private weaponService: WeaponService,
    private store: Store<WeaponAppState>
  ) {
    this.weapons = store.select('weapons');
  }

  ngOnInit() {
    this.weaponService
      .getWeapons()
      .pipe(first())
      .subscribe(result => {
        this.store.dispatch(new AddWeapons(result));
      });
  }
}
