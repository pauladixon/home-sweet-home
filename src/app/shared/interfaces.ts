export interface IHouse {
    nickname: string;
    address: string;
    neighborhood: string;
    bedrooms: number;
    bathrooms: number
    price: number
    availableSince?: any;
}

export interface IBuyer {
    houseId: number;
    contingent: boolean
    sold: boolean
}

