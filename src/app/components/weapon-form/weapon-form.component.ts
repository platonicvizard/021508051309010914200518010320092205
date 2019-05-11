import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWeapon } from 'src/app/models/i-weapon';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeaponAppState } from 'src/app/reducers';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.scss']
})
export class WeaponFormComponent implements OnInit {
  weapons: Observable<IWeapon[]>;
  weaponData: IWeapon = null;

  constructor(
    public dialogRef: MatDialogRef<WeaponFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IWeapon,
    private store: Store<WeaponAppState>
  ) {
    this.weapons = store.select('weapons');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
