import { TrackArtist } from "../artist/artistModel";

export class Playability {
    playable: Boolean
}
class AssociationsV2 {
    totalCount: number
}
class ContentRating {
    label: string
}
class Duration {
    totalMilliseconds: number
}
class Track {
    artists: TrackArtist;
    associationsV2: AssociationsV2;
    countentRating: ContentRating;
    discNumber: number;
    duration: Duration;
    name: string;
    playability: Playability;
    playcount: string;
    relinkingInformation: any;
    saved: Boolean;
    trackNumber: number;
    uri: string
}
class TrackItem {
    uid: string;
    track: Track
}
export class TracksV2 {
    items: Array<TrackItem>;
    totalCount: number
}
