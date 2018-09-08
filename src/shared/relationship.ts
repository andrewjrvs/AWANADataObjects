import { RelationshipType } from "./relationship-types.enum";

export class Relationship {
    type: RelationshipType | string;
    identifier: string;
    creationDate: Date | string;
}
