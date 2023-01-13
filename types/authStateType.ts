export default interface authStateType {
  user?: user;
  authenticated: boolean;
}

export type user = {
  email?: string;
  name?: string;
  balance?: number;
  deposits?: object;
  orders?: object;
  withdraw?: object;
};
