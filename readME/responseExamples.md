# Response Examples
[Artist]() | [Album]()
## Arist 
```c
    const nirvana = await getArtist('6olE6TJLqED3rqDCT0FyPh');
    console.log(nirvana)
```
### Response
```c
{
  data: {
    artistUnion: {
      __typename: 'Artist',
      discography: [Object],
      goods: [Object],
      id: '6olE6TJLqED3rqDCT0FyPh',
      preRelease: null,
      profile: [Object],
      relatedContent: [Object],
      relatedVideos: [Object],
      saved: false,
      sharingInfo: [Object],
      stats: [Object],
      uri: 'spotify:artist:6olE6TJLqED3rqDCT0FyPh',
      visuals: [Object],
      watchFeedEntrypoint: null
    }
  },
  extensions: {}
}
```
## Get Artist Releases

```c
    const aliciaKeys = await getArtist('3DiDSECUqqY1AuBP8qtaIa');

    const aliciaKeysAlbums = aliciaKeys.data.artistUnion.discography.albums.items;
    aliciaKeysAlbums.forEach(album => album.releases.items.forEach(release => console.log(release)));
```
### Response
```c
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 7, month: 6, precision: 'DAY', year: 2024 },
  id: '6FTH1fFDCpE90YlenHw3We',
  label: 'Interscope Records',
  name: 'Hell’s Kitchen (Original Broadway Cast Recording)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'm4strG8lT-iyr9pAvHBO3A',
    shareUrl: 'https://open.spotify.com/album/6FTH1fFDCpE90YlenHw3We?si=m4strG8lT-iyr9pAvHBO3A'
  },
  tracks: { totalCount: 30 },
  type: 'ALBUM',
  uri: 'spotify:album:6FTH1fFDCpE90YlenHw3We'
}
{
  copyright: { items: [ [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 1, month: 12, precision: 'DAY', year: 2023 },
  id: '52pl5ANwTRORPcPj6vlzA8',
  label: 'J Records/Legacy',
  name: 'The Diary Of Alicia Keys 20',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: '7TPhGvBLSlKOk0Q3vFLkXg',
    shareUrl: 'https://open.spotify.com/album/52pl5ANwTRORPcPj6vlzA8?si=7TPhGvBLSlKOk0Q3vFLkXg'
  },
  tracks: { totalCount: 24 },
  type: 'ALBUM',
  uri: 'spotify:album:52pl5ANwTRORPcPj6vlzA8'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 13, month: 6, precision: 'DAY', year: 2023 },
  id: '4Phhxlm1tQhEdsZZN8iiua',
  label: 'Alicia Keys Records',
  name: 'Inolvidable Mexico City Mexico (Live from Auditorio Nacional Mexico City, Mexico)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'zYIFuQBKSROQmEAvcJ9HFw',
    shareUrl: 'https://open.spotify.com/album/4Phhxlm1tQhEdsZZN8iiua?si=zYIFuQBKSROQmEAvcJ9HFw'
  },
  tracks: { totalCount: 29 },
  type: 'ALBUM',
  uri: 'spotify:album:4Phhxlm1tQhEdsZZN8iiua'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 31, month: 5, precision: 'DAY', year: 2023 },
  id: '5XOoZw9NpOZwa2R0biTm6n',
  label: 'Alicia Keys Records',
  name: 'Inolvidable Bogota Colombia (Live from Movistar Arena Bogota, Colombia)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'MvYjAwcaSz6dTTy0vpVJug',
    shareUrl: 'https://open.spotify.com/album/5XOoZw9NpOZwa2R0biTm6n?si=MvYjAwcaSz6dTTy0vpVJug'
  },
  tracks: { totalCount: 30 },
  type: 'ALBUM',
  uri: 'spotify:album:5XOoZw9NpOZwa2R0biTm6n'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 24, month: 5, precision: 'DAY', year: 2023 },
  id: '0R6b9wFzK0OS1eTax4tc1e',
  label: 'Alicia Keys Records',
  name: 'Inolvidable Santiago Chile (Live from Movistar Arena Santiago, Chile)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'R20rmv9JSxSDynUbqiB6Jg',
    shareUrl: 'https://open.spotify.com/album/0R6b9wFzK0OS1eTax4tc1e?si=R20rmv9JSxSDynUbqiB6Jg'
  },
  tracks: { totalCount: 31 },
  type: 'ALBUM',
  uri: 'spotify:album:0R6b9wFzK0OS1eTax4tc1e'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 20, month: 5, precision: 'DAY', year: 2023 },
  id: '5mQmi4qIG92LGMfuGYVlbt',
  label: 'Alicia Keys Records',
  name: 'Inolvidable Buenos Aires Argentina (Live from Movistar Arena Buenos Aires, Argentina)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'pF5bTkcKTuuuUv7SL7iCxg',
    shareUrl: 'https://open.spotify.com/album/5mQmi4qIG92LGMfuGYVlbt?si=pF5bTkcKTuuuUv7SL7iCxg'
  },
  tracks: { totalCount: 32 },
  type: 'ALBUM',
  uri: 'spotify:album:5mQmi4qIG92LGMfuGYVlbt'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 9, month: 5, precision: 'DAY', year: 2023 },
  id: '64WsylPFPhgaxQbG2FNrrp',
  label: 'Alicia Keys Records',
  name: 'Inesquecivel Sao Paulo Brazil (Live From Allianz Parque Sao Paulo Brazil)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'c1cENNKSRJ6AcmAsoBE7Ug',
    shareUrl: 'https://open.spotify.com/album/64WsylPFPhgaxQbG2FNrrp?si=c1cENNKSRJ6AcmAsoBE7Ug'
  },
  tracks: { totalCount: 30 },
  type: 'ALBUM',
  uri: 'spotify:album:64WsylPFPhgaxQbG2FNrrp'
}
{
  copyright: { items: [ [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 4, month: 5, precision: 'DAY', year: 2023 },
  id: '7mNtOnVVRglXpqt7ksdjc8',
  label: 'Legacy Recordings',
  name: 'Queen Charlotte: A Bridgerton Story (Covers from the Netflix Series)',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'rAmJoQyRQm-QRdmH6NtBbA',
    shareUrl: 'https://open.spotify.com/album/7mNtOnVVRglXpqt7ksdjc8?si=rAmJoQyRQm-QRdmH6NtBbA'
  },
  tracks: { totalCount: 8 },
  type: 'ALBUM',
  uri: 'spotify:album:7mNtOnVVRglXpqt7ksdjc8'
}
{
  copyright: { items: [ [Object], [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 4, month: 11, precision: 'DAY', year: 2022 },
  id: '5ichhxPbZc7s1azvGRrNsO',
  label: 'Alicia Keys Records',
  name: 'Santa Baby',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'qA-DaEmBSwCVn7LeCBcJzA',
    shareUrl: 'https://open.spotify.com/album/5ichhxPbZc7s1azvGRrNsO?si=qA-DaEmBSwCVn7LeCBcJzA'
  },
  tracks: { totalCount: 11 },
  type: 'ALBUM',
  uri: 'spotify:album:5ichhxPbZc7s1azvGRrNsO'
}
{
  copyright: { items: [ [Object] ] },
  coverArt: { sources: [ [Object], [Object], [Object] ] },
  date: { day: 12, month: 8, precision: 'DAY', year: 2022 },
  id: '4z4IDBBvwAl3SyUOorj5M0',
  label: 'RCA Records Label',
  name: 'KEYS II',
  playability: { playable: true, reason: 'PLAYABLE' },
  sharingInfo: {
    shareId: 'W65UWYe3TvCFFifSzWSdsg',
    shareUrl: 'https://open.spotify.com/album/4z4IDBBvwAl3SyUOorj5M0?si=W65UWYe3TvCFFifSzWSdsg'
  },
  tracks: { totalCount: 30 },
  type: 'ALBUM',
  uri: 'spotify:album:4z4IDBBvwAl3SyUOorj5M0'
}
```

## Album
### Get Album
```c
import { getAlbum, getTotalStreams } from "spotify-scraper"
// Get album
    const cowboyCarterAlbum = await getAlbum('6BzxX6zkDsYKFJ04ziU5xQ');
// Take a look at albumUnion
    console.log(cowboyCarterAlbum.data.albumUnion);
// Get the albums totalStreams
    console.log(getTotalStreams(cowboyCarterAlbum.data.albumUnion.tracksV2));

```
### Response
```c
{
  __typename: 'Album',
  copyright: { items: [ [Object] ], totalCount: 1 },
  courtesyLine: '',
  date: { isoString: '2024-03-29T00:00:00Z', precision: 'DAY' },
  label: 'Parkwood Entertainment/Columbia',
  name: 'COWBOY CARTER',
  playability: { playable: true, reason: 'PLAYABLE' },
  saved: false,
  sharingInfo: {
    shareId: 'XflqXO02QXG_5YN5u8NqNA',
    shareUrl: 'https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ?si=XflqXO02QXG_5YN5u8NqNA'
  },
  tracksV2: {
    items: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object]
    ],
    totalCount: 27
  },
  type: 'ALBUM',
  uri: 'spotify:album:6BzxX6zkDsYKFJ04ziU5xQ',
  watchFeedEntrypoint: null,
  artists: { items: [ [Object] ], totalCount: 1 },
  coverArt: {
    extractedColors: { colorDark: [Object], colorLight: [Object], colorRaw: [Object] },
    sources: [ [Object], [Object], [Object] ]
  },
  discs: { items: [ [Object] ], totalCount: 1 },
  releases: { items: [ [Object] ], totalCount: 1 },
  moreAlbumsByArtist: { items: [ [Object] ] }
}
// get total streams 
1607583179
```