import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import { IWeapon } from '../models/i-weapon';
import { weaponReducer } from './weapon.reducer';
import { ammunitionReducer } from './ammunition.reducer';
import { attachmentsReducer } from './attachments.reducer';
import { IAmmunition } from '../models/i-ammunition';
import { IAttachment } from '../models/i-attachment';

export interface WeaponAppState {
  readonly weapons: IWeapon[];
  readonly ammunition: IAmmunition[];
  readonly attachments: IAttachment[];
}

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['weapons', 'ammunition', 'attachments'],
    rehydrate: true,
    removeOnUndefined: true
  })(reducer);
}

export const reducers: ActionReducerMap<WeaponAppState> = {
  weapons: weaponReducer,
  ammunition: ammunitionReducer,
  attachments: attachmentsReducer,
};

export const metaReducers: MetaReducer<WeaponAppState>[] = !environment.production
  ? []
  : [];
