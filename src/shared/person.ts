import { ContactPoint } from "./contact-point";
import { PostalAddress } from "./postal-address";
import { Relationship } from "./relationship";
import { PersonProfile } from "./person-profile";

export class Person {
    identifier: string;
    birthDate?: Date;

    /** 
     * This is the 'full' name attribute, and
     * should probably be build systematicly off
     * the first / last and middle names
     */
    name: string;

    /** AKA first name */
    givenName?: string;

    /** AKA last name */
    familyName?: string;

    /** middle name */
    additionalName?: string;

    /** 
     * this will be the contact methods for the 
     * person
     * Note: Clubbers probably won't get 
     * contact points, only their guardians 
     */
    contactPoints?: ContactPoint[];

    address?: PostalAddress;

    gender?: string;

    relationships?: Relationship[];

    profile?: PersonProfile[];

    documents?: any[];
}