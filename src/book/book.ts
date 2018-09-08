import { BookLog } from "./book-log";

export class Book {
    /** this should match a core books identifier */
    identifier: string;
    /** this is the name of the book, like wing runner */
    name: string;

    startedDate: null | Date | string;
    completedDate: null | Date | string;

    active: boolean;
    
    /** 
     * we might just use the existance of 'completed' 
     * date to say it was completed...
     */
    isCompleted?: boolean;

    log: BookLog[];
}