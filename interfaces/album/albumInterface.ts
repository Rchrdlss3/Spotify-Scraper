import { CoverArt } from "../artist/appearsOnInterface";
import { Playability, TracksV2 } from "./trackInterface";


interface AlbumUnion {
    __typename: string;
    copyright: {};
    courtesyLine: {};
    date: {};
    label: {};
    name: string;
    playability: Playability;
    saved: boolean;
    sharingInfo: {};
    tracksV2: TracksV2;
    type: string;
    uri: string;
    watchFeedEntrypoint: any;
    artists: {};
    coverArt: CoverArt;
    discs: {};
    releases: {};
    moreAlbumsByArtist: {};
}

interface Data {
    albumUnion: AlbumUnion
}
export interface AlbumData {
    data : Data
    extensions: {}
}