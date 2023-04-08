export interface BaseId {
    id: string;
}

// export interface Card extends BaseId {
//     front: string;
//     back: string;
// };

// export const sampleCard = {
//     id: '1',
//     front: 'Hello',
//     back: 'World'
// };

// export const emptyCard = {
//     id: '',
//     front: '',
//     back: ''
// }

export interface TravelLocation extends BaseId {
    tripTitle: string;
    city: string;
    state?: string;
    zip?: string;
    addressOne?: string;
    addressTwo?: string;
    country: string;
    date: Date;
    description: string;
    latitude: number | null;
    longitude: number | null;

};

export const emptyLocation = {
    id: '',
    tripTitle: '',
    city: '',
    state: '',
    zip: '',
    addressOne: '',
    addressTwo: '',
    country: '',
    date: new Date(),
    description: '',
    latitude: null,
    longitude: null
};

export const sampleLocation = {
    id: '1',
    tripTitle: 'Trip to the Moon',
    city: 'Moon Village',
    state: 'Eclipse',
    zip: '99999',
    addressOne: '123 Main St',
    addressTwo: 'Apt 1',
    country: 'Luna',
    date: new Date(),
    description: 'This is a sample location',
    latitude: 12.2324334,
    longitude: 91.292384
};