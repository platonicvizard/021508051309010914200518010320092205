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
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WeaponOptionComponent,
    WeaponFormComponent,
    WeaponSelectionComponent,
    WeaponsListComponent,
    ItemSelectorComponent
  ],
  entryComponents: [WeaponFormComponent],
  exports: [WeaponsListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class ComponentsModule {}
