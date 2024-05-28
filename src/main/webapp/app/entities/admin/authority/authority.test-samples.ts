import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c6c16288-26b2-4f13-becc-70b624c0084f',
};

export const sampleWithPartialData: IAuthority = {
  name: '24c3bfdb-d282-49b4-b610-546e33bed1dc',
};

export const sampleWithFullData: IAuthority = {
  name: '8ea31a0f-74f1-4486-a4e3-325b214012b6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
