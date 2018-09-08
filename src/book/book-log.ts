export class BookLog {
    /** this will tie it back to the 'section' */
    indentifier: string;

    /** 
     * based of the 'base' book, but should be
     * RED JEWEL 1, or something like that.
     */
    name: string;

    /** this would be the listener Identifier */
    completedBy: string; 

    /** When this was completed */
    completedDate: Date | string;
}