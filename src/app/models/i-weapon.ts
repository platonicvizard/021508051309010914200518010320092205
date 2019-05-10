import { IAttachment } from './i-attachment';
import { IAmmunition } from './i-ammunition';
import { IWeaponBaseItem } from './i-weapon-base-item';

export interface IWeapon extends IWeaponBaseItem {
  attachments?: Array<IAttachment>;
  ammo?: IAmmunition;
}
