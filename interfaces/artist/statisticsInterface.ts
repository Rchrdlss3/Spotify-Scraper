interface City {
    city: string;
    country: string;
    numberOfListeners: number;
    region: string;
}
interface TopCities {
    items: Array<City>;
}
export interface Statistics {
    followers: number;
    monthlyListeners: number;
    topCities: TopCities;
    worldRank: number;
}