interface DiscoveredData {
    __typename: string
}
interface DiscoveredItems {
    data: DiscoveredData
}
export interface DiscoveredOnV2 {
    items: Array<DiscoveredItems>
    totalCount: number;
}