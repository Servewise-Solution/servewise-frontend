export interface IProvider {
  _id: string;
  name: string;
  email: string;
  phone: string;
  ownerName: string;
  isVerified: boolean;
  status: string;
  image: string;
  yearsOfExperience: number;
  premiseImage: string;
  pickAndDrop: boolean;
  serviceOwnerPremise: boolean;
  isAvailable: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
