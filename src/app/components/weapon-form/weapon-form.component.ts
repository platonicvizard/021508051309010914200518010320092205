import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWeapon } from 'src/app/models/i-weapon';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeaponAppState } from 'src/app/reducers';
import { IAmmunition } from 'src/app/models/i-ammunition';
import { IAttachment } from 'src/app/models/i-attachment';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.scss']
})
export class WeaponFormComponent implements OnInit {
  weapons: Observable<IWeapon[]>;
  ammunition: Observable<IAmmunition[]>;
  attachments: Observable<IAttachment[]>;
  weaponData: IWeapon = null;

  @Output()
  actionClicked: EventEmitter<IWeapon> = new EventEmitter<IWeapon>();

  constructor(
    public dialogRef: MatDialogRef<WeaponFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IWeapon,
    private store: Store<WeaponAppState>
  ) {
    this.weapons = store.select('weapons');
    this.ammunition = store.select('ammunition');
    this.attachments = store.select('attachments');
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.actionClicked.emit(this.weaponData);
  }

  ngOnInit() {}
}
