export default interface authStateType {
  user?: userType;
  orders?: [];
  withdraw?: [];
  deposits?: [];
}

export type userType = {
  _id?: string;
  balance?: number;
  email?: string;
  image?: string;
  name?: string;
};
