import { ImageItem, ImageSource } from "./profileInterface";

interface ColorRaw {
    hex: string;
}

interface ExtractedColors {
    colorRaw: ColorRaw
}

interface AvatarImage {
    extractedColors: ExtractedColors;
    sources: Array<ImageSource>;
}

interface Gallery {
    items: Array<ImageItem>
}

export interface Visuals {
    avatarImage: AvatarImage;
    gallery: Gallery;
    headerImage: any | undefined;
}