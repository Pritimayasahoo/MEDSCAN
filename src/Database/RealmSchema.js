import { Realm } from '@realm/react';

// Define the Image schema
export class ImageSchema extends Realm.Object {
    static schema = {
        name: 'Image',
        properties: {
            _id: 'int', // Unique identifier
            uri: 'string', // Image file path
            prescriptions: { type: 'list', objectType: 'mixed' }, // List of objects with MedicineName, Dose, Time
        },
        primaryKey: '_id',
    };
}
