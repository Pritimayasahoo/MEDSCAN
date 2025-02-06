import { Realm } from '@realm/react';

// Define the Image schema
export class ImageSchema extends Realm.Object {
    static schema = {
        name: 'Image',
        properties: {
            _id: 'int', // Unique identifier
            uri: 'string', // Image file path
        },
        primaryKey: '_id',
    };
}
