import { IWeaponBaseItem } from './i-weapon-base-item';

export interface IAmmunition extends IWeaponBaseItem {
  rounds: number;
}
