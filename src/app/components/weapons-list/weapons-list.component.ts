import { Component, OnInit } from '@angular/core';
import { WeaponService } from 'src/app/services/weapon.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IWeapon } from 'src/app/models/i-weapon';
import { Store } from '@ngrx/store';
import { WeaponAppState } from 'src/app/reducers';
import {
  AddWeapons,
  AddAmmunition,
  AddAttachments
} from 'src/app/actions/weapon.action';
import { MatDialog } from '@angular/material/dialog';
import { WeaponFormComponent } from '../weapon-form/weapon-form.component';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})
export class WeaponsListComponent implements OnInit {
  weapons: Observable<IWeapon[]>;

  constructor(
    private weaponService: WeaponService,
    private store: Store<WeaponAppState>,
    public dialog: MatDialog
  ) {
    this.weapons = store.select('weapons');
  }

  openDialog(selectedWeapon: IWeapon): void {
    const dialogRef = this.dialog.open(WeaponFormComponent, {
      data: selectedWeapon
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.weaponService
      .getWeapons()
      .pipe(first())
      .subscribe(result => {
        this.store.dispatch(new AddWeapons(result));
      });

    this.weaponService
      .getAmmunition()
      .pipe(first())
      .subscribe(result => {
        this.store.dispatch(new AddAmmunition(result));
      });

    this.weaponService
      .getAttachments()
      .pipe(first())
      .subscribe(result => {
        this.store.dispatch(new AddAttachments(result));
      });
  }
}
