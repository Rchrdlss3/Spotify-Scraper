import { AppearsOn } from "./appearsOnInterface";
import { DiscoveredOnV2 } from "./discoveredInterface";
import { FeaturingV2 } from "./featureInterface";
import { RelatedArtists } from "./relatedArtistInterface";

export interface RelatedContent {
    appearsOn: AppearsOn;
    discoveredOnV2: DiscoveredOnV2;
    featuringV2: FeaturingV2;
    relatedArtists: RelatedArtists;
}