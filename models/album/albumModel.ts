import { Playability, TracksV2 } from "./trackModel";

class AlbumUnion {
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
    coverArt: {};
    discs: {};
    releases: {};
    moreAlbumsByArtist: {}
    getTotalStreams = () => {
        let totalStreams = 0
        for (let i = 0; i < this.tracksV2.items.length; i++) {
            totalStreams += parseInt(this.tracksV2.items[i].track.playcount)
        }
        return totalStreams
    }
}

export class AlbumData {
    data : {albumUnion: AlbumUnion}
    extensions: {}
}