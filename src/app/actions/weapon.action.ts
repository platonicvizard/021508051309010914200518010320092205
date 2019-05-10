import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWeapon } from '../models/i-weapon';

export const ADD_WEAPONS = '[WEAPONS] Add';
export const REMOVE_WEAPON = '[WEAPON] Remove';

export class AddWeapons implements Action {
  readonly type = ADD_WEAPONS;

  constructor(public payload: IWeapon[]) {}
}

export class RemoveWeapon implements Action {
  readonly type = REMOVE_WEAPON;

  constructor(public payload: number) {}
}

export type Actions = AddWeapons | RemoveWeapon;
