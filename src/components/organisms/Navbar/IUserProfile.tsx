import { IUserEmail, IUserPhone, Timestamp, IUserSettings } from './Menu';

export interface IUserProfile {
    name?: string;
    emailAddress: IUserEmail;
    phoneNumber?: IUserPhone;
    photoURL?: string;
    uid: string;
    memberOf: string[];
    createdOn: Timestamp;
    passwordChangedOn: Timestamp;
    userType: 'superuser' | 'admin' | 'manager' | 'standard';
    userSettings: IUserSettings;
    notifications: string[];
}
