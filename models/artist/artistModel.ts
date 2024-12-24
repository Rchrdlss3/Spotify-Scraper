import { Goods } from "./goodsModel";
import { Profile } from "./profileModel";
import { RelatedContent } from "./RelatedContentModel";

class Item {
    profile: Profile;
    uri: string;
}
export class TrackArtist {
    items: Array<Item>;
}

class ArtistUnion {
    __typename: string;
    discopgraphy: {};
    goods: Goods;
    id: string;
    preRelease: {} | undefined;
    profile: Profile;
    relatedContent: RelatedContent;
    relatedVideos: {};
    saved: boolean;
    sharingInfo: {};
    stats: {};
    uri: string;
    visuals: {};
    watchedFeedEntrypoint: {} | undefined;
}
export class ArtistData {
    data: {artistUnion: ArtistUnion};
    extensions: {};
}