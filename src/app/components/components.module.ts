import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponOptionComponent } from './weapon-option/weapon-option.component';
import { WeaponFormComponent } from './weapon-form/weapon-form.component';
import { WeaponSelectionComponent } from './weapon-selection/weapon-selection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WeaponsListComponent } from './weapons-list/weapons-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    WeaponOptionComponent,
    WeaponFormComponent,
    WeaponSelectionComponent,
    WeaponsListComponent
  ],
  exports: [WeaponsListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class ComponentsModule {}
