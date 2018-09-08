export class PostalAddress {
    addressCountry?: 'USA' | string;

    streetAddress: string;

    /** City */
    addressLocality: string;

    /** State */
    addressRegion: string;

    /** ZIP */
    postalCode: string;

    /** PO BOX */
    postOfficeBoxNumber?: string;
}
