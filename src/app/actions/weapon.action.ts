import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IWeapon } from '../models/i-weapon';
import { IAmmunition } from '../models/i-ammunition';
import { IAttachment } from '../models/i-attachment';

export const ADD_WEAPONS = '[WEAPONS] Add';
export const REMOVE_WEAPON = '[WEAPON] Remove';
export const ADD_AMMUNITION = '[AMMUNITION] Add';
export const ADD_ATTACHMENTS = '[ATTACHMENT] Add';

export class AddWeapons implements Action {
  readonly type = ADD_WEAPONS;

  constructor(public payload: IWeapon[]) {}
}

export class RemoveWeapon implements Action {
  readonly type = REMOVE_WEAPON;

  constructor(public payload: number) {}
}

export class AddAmmunition implements Action {
  readonly type = ADD_AMMUNITION;

  constructor(public payload: IAmmunition[]) {}
}

export class AddAttachments implements Action {
  readonly type = ADD_ATTACHMENTS;

  constructor(public payload: IAttachment[]) {}
}

export type Actions = AddWeapons | RemoveWeapon | AddAmmunition | AddAttachments;
