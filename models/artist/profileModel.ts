class Biography {
    text: string;
    type: string;
}
class ArtistLink {
    name: string;
    url: string;
}
class ExternalLinks {
    items: Array<ArtistLink>
}
export class ImageSource {
    height: any | null;
    url: string;
    width: any | null
}
class ImageItem {
    sources: Array<ImageSource>
}
class ItemV2Image {
    items: Array<ImageItem>
}
class ItemV2Data {
    __typename: string;
    images: ItemV2Image;
    name: string;
    uri: string
}
class ItemV2 {
    __typename: string;
    data: {}
}
class ThumbnailImage {
    data: Array<ImageSource>
}
class PinnedItem {
    backgroundImageV2: {} | undefined;
    comment: string;
    itemV2: ItemV2;
    subtitle: string;
    thumbnailImage: ThumbnailImage;
    title: string;
    tpye: string;
    uri: string
}
class OwnerData {
    __typename: string;
    name: string;
}
class OwnerV2 {
    data : OwnerData;
}
class PlaylistImages {
    items: Array<ImageItem>
}
class PlaylistData {
    __typename: string;
    description: string;
    images: PlaylistImages;
    name: string;
    ownerV2: OwnerV2
    uri: string;
}
class PlaylistItem {
    data: PlaylistData;
}
class PlaylistsV2 {
    items: Array<PlaylistItem>;
    totalCount: number;  
}
export class Profile {
    biography: Biography;
    externalLinks: ExternalLinks;
    name: string;
    pinnedItem: PinnedItem;
    playlistsV2: PlaylistsV2;
    verified: boolean
}