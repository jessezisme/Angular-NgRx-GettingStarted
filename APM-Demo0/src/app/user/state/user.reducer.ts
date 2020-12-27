import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';

export interface UserState {
  maskUserName: boolean;
}

export interface State extends AppState.State {
  user: UserState;
}

const initialState: UserState = {
  maskUserName: false,
};

export const getUserState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserState,
  (state) => state.maskUserName
);

export const userReducer = createReducer(
  initialState,
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
