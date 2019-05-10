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

export interface WeaponAppState {
  readonly weapons: IWeapon[];
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
  weapons: weaponReducer
};

export const metaReducers: MetaReducer<WeaponAppState>[] = !environment.production
  ? []
  : [];
