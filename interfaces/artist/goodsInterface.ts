interface Merch {
    items: Array<any>
}
interface UserLocation {
    name: string;
}
interface PagingInfo {
    limit: number
}
interface Concerts {
    items: Array<any>;
    pagingInfo: PagingInfo;
    totalCount: number
}
interface Events {
    concerts: Concerts;
    userLocation: UserLocation;
}
export interface Goods {
    events: Events;
    merch: Merch;
}