import { TrackArtist } from "../artist/artistInterface";

export interface Playability {
    playable: Boolean;
    reason: string | undefined;
}
interface AssociationsV2 {
    totalCount: number
}
interface ContentRating {
    label: string
}
interface Duration {
    totalMilliseconds: number
}
interface Track {
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
interface TrackItem {
    uid: string;
    track: Track
}
export interface TracksV2 {
    items: Array<TrackItem>;
    totalCount: number
}
