import { ImageItem } from "./profileInterface";

interface RelatedArtistVisuals {
    avatarImage: ImageItem;
}
interface RelatedArtistProfile {
    name: string;
}

interface RelatedArtistsItem {
    id: string;
    profile: RelatedArtistProfile;
    uri: string;
    visuals: RelatedArtistVisuals;
}
export interface RelatedArtists {
    items: Array<RelatedArtistsItem>
    totalCount: number
}