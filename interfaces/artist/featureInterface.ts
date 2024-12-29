import { ImageItem, OwnerV2 } from "./profileInterface";

interface FeatureData {
    __typename: string;
    description: string;
    id: string;
    images: ImageItem;
    name: string;
    ownerV2: OwnerV2;
    uri: string;
    
}
interface FeatureItems {
    data: FeatureData
}
export interface FeaturingV2 {
    items: Array<FeatureItems>
    totalCount: number;
}