import { ImageSource } from "./profileModel";

class SharingInfo {
    shareId: string;
    shareUrl: string
}
class CoverArt {
    sources: Array<ImageSource>
}
class ReleaseArtistProfile {
    name: string
}
class ReleaseArtist {
    profile: ReleaseArtistProfile;
    uri: string;
}
class ReleaseArtists {
    items: Array<ReleaseArtist>
}
class ReleaseItem {
    artists: {};
    coverArt: CoverArt;
    id: string;
    name: string;
    sharingInfo: SharingInfo;
    type: string;
    uri: string
}
class Releases {
    items: Array<ReleaseItem>;
    totalCount: number
}
class AppearsOnItem {
    releases: Releases;
}
export class AppearsOn {
    items: Array<AppearsOnItem>;
    totalCount: number;
}