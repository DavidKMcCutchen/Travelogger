export interface BaseId {
    id: string;
}

export interface Card extends BaseId {
    front: string;
    back: string;
};

export const sampleCard = {
    id: '1',
    front: 'Hello',
    back: 'World'
};

export const emptyCard = {
    id: '',
    front: '',
    back: ''
}