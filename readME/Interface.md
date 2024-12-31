# Interfaces
## Albums

### Playability
| Prop | Type | Example
--- | --- | --- |
playable | boolean | true
reason | string \| undefined | ""

### AssociationV2
| Prop | Type | Example
--- | --- | --- |
totalCount | number | 0

### Content Rating
| Prop | Type | Example
--- | --- | --- |
label | string | ""

### Duration
| Prop | Type | Example
--- | --- | --- |
totalMilliSeconds | number | 3252453

### Track
| Prop | Type | Example
--- | --- | --- |
artists | [TrackArtist](#trackartist) | [TrackArtist](#trackartist) 
associationsV2 | [AssociationsV2](#associationv2) | [AssociationsV2](#associationv2)
countentRating | [ContentRating](#content-rating) | [ContentRating](#content-rating)
discNumber | number | 7
duration | [Duration](#duration) | [Duration](#duration)
name | string | "Thriller"
playability | [Playability](#playability) | [Playability](#playability)
playcount | string | "678701141"
relinkingInformation | any | any
saved | Boolean | false
trackNumber | number | 3
uri | string | "spotify:track:2LlQb7Uoj1kKyGhlkBf9aC"

### TrackItem
| Prop | Type | Example
--- | --- | --- |
uid | string | "TRACK NAME"
track | [Track](#track) | [Track](#track)

### SharingInfo
| Prop | Type | Example
--- | --- | --- |
shareID | string | ""
shareUrl | string ""

### TracksV2
| Prop | Type | Example
--- | --- | --- |
items | Array<[TrackItem](#trackitem)> | [[TrackItem](#trackitem)]
totalCount | number | 12

### AlbumUnion
| Prop | Type | Example
--- | --- | --- |
__typename |  string | "ALBUM"
copyright | {} | { items: [ [Object] ], totalCount: 1 }
| courtesyLine | string | ''
| date | {} | { isoString: '2024-03-29T00:00:00Z', precision: 'DAY' }
|label | string | 'Parkwood Entertainment/Columbia'
|name | string | "Cowboy Carter"
|playability | [Playability](#playability) | [Playability](#playability)
|saved | boolean | false
|sharingInfo | [SharingInfo](#sharinginfo) |   sharingInfo: {shareId: 'XflqXO02QXG_5YN5u8NqNA', shareUrl: 'https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ?si=XflqXO02QXG_5YN5u8NqNA'}
| tracksV2 | [TracksV2](#tracksv2) | {Array<{}>}
| type | string | 'ALBUM'
| uri | string | 'spotify:album:6BzxX6zkDsYKFJ04ziU5xQ'
| watchFeedEntrypoint | any | null
| artists | {} | artists: { items: [ [Object] ], totalCount: 1 }
| coverArt | CoverArt | {extractedColors: { colorDark: [Object], colorLight: [Object], colorRaw: [Object] }, sources: [ [Object], [Object], [Object] ]}
discs | {} | { items: [ [Object] ], totalCount: 1 }
releases | {} | { items: [ [Object] ], totalCount: 1 }
| moreAlbumsByArtist | {} | { items: [ [Object] ] }

### Data
| Prop | Type | Example
--- | --- | --- |
albumUnion |  [AlbumUnion](#albumunion) | [AlbumUnion](#albumunion)


### AlbumData
| Prop | Type | Example
--- | --- | --- |
data | [Data](#data) | [Data](#data)
extensions | {} \| undefined | {}


## Profile

### 
| Prop | Type | Example
--- | --- | --- |

### ImageSource
| Prop | Type | Example
--- | --- | --- |
height | any\|undefined | "500px" (sometimes can be number I beleive)
url | string | ""
width | any\|undefined | "500px" 

### ImageItem
| Prop | Type | Example
--- | --- | --- |
sources | Array\<[ImageSource](#imagesource)> | [[ImageSource](#imagesource)]

### PlaylistImages
| Prop | Type | Example
--- | --- | --- |
items | Array\<[ImageItem](#imageitem)> | [[ImageItem](#imageitem)]

### PlaylistData
| Prop | Type | Example
--- | --- | --- |
__typename | string | ""
description | string ""
images | PlaylistImages | PlaylistImages
ownerV2 | OwnerV2 | OwnerV2
uri | string | ""
### PlaylistItem
| Prop | Type | Example
--- | --- | --- |
data | [PlaylistData](#playlistdata) | [PlaylistData](#playlistdata)
### PlaylistsV2
| Prop | Type | Example
--- | --- | --- |
items | Array\<[PlaylistItems](#playlistitem)> | [[PlaylistItem](#playlistitem)]
### Profile
| Prop | Type | Example
--- | --- | --- |
biography | Biography | Biography
externalLinks | ExternalLinks | ExternalLinks
name | string | "Stevie Wonder"
pinnedItem | PinnedItem | PinnedItem
playlistsV2 | PlaylistsV2 | PlaylistsV2
verified | boolean | true

## Artist
| Prop | Type | Example
--- | --- | --- |

### Item
| Prop | Type | Example
--- | --- | --- |
| profile | Profile | {}
| uri | string | ""

### TrackArtist
| Prop | Type | Example
--- | --- | --- |
items | Array<[Item](#item)> | [{profile: {}, uri: ""}]
### ColorRaw
| Prop | Type | Example
--- | --- | --- |
hex | string | "#ffffff"

### ExtractedColors
| Prop | Type | Example
--- | --- | --- |
colorRaw | [ColorRaw](#colorraw) | [ColorRaw](#colorraw)

### AvatarImage
| Prop | Type | Example
--- | --- | --- |
extractedColors | [ExtractedColors](#extractedcolors) | [ExtractedColors](#extractedcolors)
sources | Array\<[ImageSources]()> | [[ImageSources]()]

### Gallery
| Prop | Type | Example
--- | --- | --- |
items | Array\<[ImageItems](#image)> | [ImageItem]

### Visuals 
| Prop | Type | Example
--- | --- | --- |
avatarImage | AvatarImage | AvatarImage
gallery | [Gallery](#gallery) | [Gallery](#gallery)
headerImage | any \| undefined | null

### Artist Union
| Prop | Type | Example
--- | --- | --- |
__typename | string | 'Artist'
discography | Discopgrahy | Array<{}>
| goods | Goods | Array<{}>
id | string | '6olE6TJLqED3rqDCT0FyPh'
| preRelease | any \| undefined | null
| profile | Profile | Array<{}>
| relatedContent |  RelatedContent | Array<{}>
relatedVideos | RelatedVideos | Array<{}>
saved | boolean | false
sharingInfo | [SharingInfo](#sharinginfo) | [SharingInfo](#sharinginfo)
stats | Statistics | Array<{}>
uri | string | 'spotify:artist:6olE6TJLqED3rqDCT0FyPh'
visuals | Visuals | Array<{}>
watchedFeedEntrypoint | any \| undefined | null

### Artist Data
| Prop | Type | Example
--- | --- | --- |
data| {} | {artistUnion: [ArtistUnion](#artist-union)}
extensions | {} | {}