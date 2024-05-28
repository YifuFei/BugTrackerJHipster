import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 22767,
  login: 'FSX4v',
};

export const sampleWithPartialData: IUser = {
  id: 12423,
  login: 'jY_-',
};

export const sampleWithFullData: IUser = {
  id: 21043,
  login: 'j8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
