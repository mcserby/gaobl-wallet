export const AuthStateName = 'auth';

export interface AuthState {
  privateKey: string;
}

export const initialAuthState: AuthState = {
  privateKey: ''
};
