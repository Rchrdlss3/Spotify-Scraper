class Merch {
    items: Array<any>
}
class UserLocation {
    name: string;
}
class PagingInfo {
    limit: number
}
class Concerts {
    items: Array<any>;
    pagingInfo: PagingInfo;
    totalCount: number
}
class Events {
    concerts: Concerts;
    userLocation: UserLocation;
}
export class Goods {
    events: Events;
    merch: Merch;
}