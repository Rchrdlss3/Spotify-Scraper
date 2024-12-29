interface Biography {
    text: string;
    type: string;
}
interface ArtistLink {
    name: string;
    url: string;
}
interface ExternalLinks {
    items: Array<ArtistLink>
}
export interface ImageSource {
    height: any | null;
    url: string;
    width: any | null
}
export interface ImageItem {
    sources: Array<ImageSource>
}
interface ItemV2Image {
    items: Array<ImageItem>
    totalCount: number | undefined
}
interface ItemV2Data {
    __typename: string;
    images: ItemV2Image;
    name: string;
    uri: string
}
interface ItemV2 {
    __typename: string;
    data: {}
}
interface ThumbnailImage {
    data: Array<ImageSource>
}
interface PinnedItem {
    backgroundImageV2: {} | undefined;
    comment: string;
    itemV2: ItemV2;
    subtitle: string;
    thumbnailImage: ThumbnailImage;
    title: string;
    tpye: string;
    uri: string
}
interface OwnerData {
    __typename: string;
    name: string;
}
export interface OwnerV2 {
    data : OwnerData;
}
interface PlaylistImages {
    items: Array<ImageItem>
}
interface PlaylistData {
    __typename: string;
    description: string;
    images: PlaylistImages;
    name: string;
    ownerV2: OwnerV2
    uri: string;
}
interface PlaylistItem {
    data: PlaylistData;
}
interface PlaylistsV2 {
    items: Array<PlaylistItem>;
    totalCount: number;  
}
export interface Profile {
    biography: Biography;
    externalLinks: ExternalLinks;
    name: string;
    pinnedItem: PinnedItem;
    playlistsV2: PlaylistsV2;
    verified: boolean
}