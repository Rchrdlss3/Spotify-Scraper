<div style= "margin: 5px; text-align: center;">
<h1 style= "display: inline-block; vertical-align: middle; color: #1DB954; font-size: 95;">Spotify Scraper</h1>
<img style = "display: inline-block; vertical-align: middle" src= "https://rchrdlss3.github.io/spotify_scrape_images/logos/spotifyscrape.png" width = 200 />
</div>

> [!WARNING]
> Package is NOT for commercial use and is intended solely for non-profit, educational, and recreational purposes. 

<!--Work in Progress-->
## Overview
Obtain data from Spotify regarding your favorite artist or album. Utilizes Puppeteer.
## Install
``npm i spotify-scrape``

## Dependencies

## Usage
|Function| Example | Type | Description |
|---| ---| ---| --- |
getAlbum | getAlbum('6YUCc2RiXcEKS9ibuZxjt0') | (albumID:string) => Promise\<AlbumData> | Takes in Spotify AlbumID, returns [AlbumData]() 
| getArtist | getArtist('3fMbdgg4jU18AjLCKBhRSm') | (artistID:string) => Promise\<ArtistData> | Takes spotifyArtistID, returns [ArtistData]()
getTotalStreams| getTotalStreams([TracksV2]()) | ([TracksV2]()) => number | Takes in [TracksV2]() object from [AlbumData]() and returns total streams of album.

## Demo
```c
import { getArtist , getAlbum, getTotalStreams } from "spotify-scraper"

//Take a look at artist
    const nirvana = await getAritst('6olE6TJLqED3rqDCT0FyPh');
    console.log(nirvana)

// Get an artist releases
    const aliciaKeys = await getArtist('3DiDSECUqqY1AuBP8qtaIa');

    const aliciaKeysAlbums = aliciaKeys.data.artistUnion.discography.albums.items;
    aliciaKeysAlbums.forEach(album => album.releases.items.forEach(release => console.log(release)));

// Get album
    const cowboyCarterAlbum = await getAlbum('6BzxX6zkDsYKFJ04ziU5xQ');
// Take a look at albumUnion
    console.log(cowboyCarterAlbum.data.albumUnion);
// Get the albums totalStreams
    console.log(getTotalStreams(cowboyCarterAlbum.data.albumUnion.tracksV2));

```

## Models
<!--WIP -->