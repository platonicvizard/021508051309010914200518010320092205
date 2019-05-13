import { Action } from '@ngrx/store';
import { IWeapon } from '../models/i-weapon';
import * as WeaponActions from './../actions/weapon.action';
import { IAmmunition } from '../models/i-ammunition';

const initialState: IAmmunition[] = [];

export function ammunitionReducer(
  state: IAmmunition[] = initialState,
  action: WeaponActions.Actions
) {
  switch (action.type) {
    case WeaponActions.ADD_AMMUNITION:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
