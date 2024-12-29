import { Playability } from "../album/trackInterface";
import { CoverArt } from "./appearsOnInterface";
import { SharingInfo } from "./sharingInfoInterface";

interface Release {
    copyright: CopyRights
    coverArt: CoverArt;
    date: ReleaseDate;
    id: string;
    label: string;
    name: string;
    playability: Playability;
    sharingInfo: SharingInfo;
    tracks: ReleaseTracks;
    type: string;
    uri: string;
}

interface TopTrack {
    track: Release;
    uid: string;
}

interface TopTracks {
    items: Array<TopTrack>;
}
interface ReleaseItems {
    items: Array<Release>;
}
interface ReleaseSingles {
    releases: ReleaseItems;
}
interface Singles {
    items: Array<ReleaseSingles>
    totalCount: number;
}

interface Compilations {
    items: Array<any>;
    totalCount: number;
}

interface CopyRight {
    text: string;
    type: string;
}

interface CopyRights {
    items: Array<CopyRight>;
}

interface ReleaseDate {
    day: number;
    month: number;
    precision: string;
    year: number;
}

interface ReleaseTracks {
    totalCount: number;
}

interface Releases {
    items: Array<Release>
}

interface Album {
    releases: Releases
}

interface Albums {
    items: Array<Album>
    totalCount: number
}

interface PopularReleasesAlbums {
    items: Array<Release>
    totalCount: number;
}

interface Latest extends Release {
}


export interface Discopgrahy {
    albums: Albums;
    compilations: Compilations;
    latest: Latest | null;
    popularReleasesAlbums: PopularReleasesAlbums;
    singles: Singles;
    topTracks: TopTracks;
}