import { Discopgrahy } from "./discopgraphyInterface";
import { Goods } from "./goodsInterface";
import { Profile } from "./profileInterface";
import { RelatedContent } from "./relatedContentInterface";
import { RelatedVideos } from "./relatedVideosInterface";
import { SharingInfo } from "./sharingInfoInterface";
import { Statistics } from "./statisticsInterface";
import { Visuals } from "./visualsInterface";

interface Item {
    profile: Profile;
    uri: string;
}
export interface TrackArtist {
    items: Array<Item>;
}

interface ArtistUnion {
    __typename: string;
    discography: Discopgrahy;
    goods: Goods;
    id: string;
    preRelease: any | undefined;
    profile: Profile;
    relatedContent: RelatedContent;
    relatedVideos: RelatedVideos;
    saved: boolean;
    sharingInfo: SharingInfo;
    stats: Statistics;
    uri: string;
    visuals: Visuals;
    watchedFeedEntrypoint: any | undefined;
}
export interface ArtistData {
    data: {artistUnion: ArtistUnion};
    extensions: {};
}