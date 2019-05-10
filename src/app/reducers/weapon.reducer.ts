import { Action } from '@ngrx/store';
import { IWeapon } from '../models/i-weapon';
import * as WeaponActions from './../actions/weapon.action';

const initialState: IWeapon[] = [];

export function weaponReducer(
  state: IWeapon[] = initialState,
  action: WeaponActions.Actions
) {
  switch (action.type) {
    case WeaponActions.ADD_WEAPONS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
