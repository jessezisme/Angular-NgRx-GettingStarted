import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { UserActions } from './actions/index';

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
