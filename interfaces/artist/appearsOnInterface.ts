import { ImageSource } from "./profileInterface";

interface SharingInfo {
    shareId: string;
    shareUrl: string
}
export interface CoverArt {
    sources: Array<ImageSource>
}
interface ReleaseArtistProfile {
    name: string
}
interface ReleaseArtist {
    profile: ReleaseArtistProfile;
    uri: string;
}
interface ReleaseArtists {
    items: Array<ReleaseArtist>
}
interface ReleaseItem {
    artists: ReleaseArtists;
    coverArt: CoverArt;
    id: string;
    name: string;
    sharingInfo: SharingInfo;
    type: string;
    uri: string
}
interface Releases {
    items: Array<ReleaseItem>;
    totalCount: number
}
interface AppearsOnItem {
    releases: Releases;
}
export interface AppearsOn {
    items: Array<AppearsOnItem>;
    totalCount: number;
}