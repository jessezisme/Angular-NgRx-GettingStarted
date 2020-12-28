import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { UserState } from './user.reducer';

export interface State extends AppState.State {
  user: UserState;
}

export const getUserState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserState,
  (state) => state.maskUserName
);
