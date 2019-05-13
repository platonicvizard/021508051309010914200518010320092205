import * as WeaponActions from './../actions/weapon.action';
import { IAttachment } from '../models/i-attachment';

const initialState: IAttachment[] = [];

export function attachmentsReducer(
  state: IAttachment[] = initialState,
  action: WeaponActions.Actions
) {
  switch (action.type) {
    case WeaponActions.ADD_ATTACHMENTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
