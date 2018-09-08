import { PostalAddress } from '../shared/postal-address';

export class Club {
    
    /** club number */
    identifier: string;
    
    name: string;

    address: PostalAddress;

    /** the identifier for the Awana Missionary */
    missionaryIdentifier?: string;
}