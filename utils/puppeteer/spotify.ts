import puppeteer, { HTTPResponse } from "puppeteer";
import { AlbumData } from "../../interfaces/album/albumInterface";
import { ArtistData } from "../../interfaces/artist/artistInterface";
import { TracksV2 } from "../../interfaces/album/trackInterface";

const SpotifyLink = 'https://open.spotify.com'
export enum spotifyQuery {
    ARTIST = 'queryArtistOverview',
    ALBUM = 'getAlbum'
}

export class SpotifyData  {
    type: string = '';
    ID: string = '';
}

const spotifySearch = async (id:string,path:string,query:string):Promise<HTTPResponse> => {
    try {
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto(`${SpotifyLink}/${path}/${id}`);
        const finalResponse = await page.waitForResponse(async response => {
            return (response.url().includes(query));
        })   
        return finalResponse
    } catch (e:any) {
        return e
    }
}
export const getAlbum = async (albumID:string):Promise<AlbumData> => {
    try {
        const search = await spotifySearch(albumID,'album','getAlbum')
        const data:AlbumData = await search.json();
        return data
    } catch (e:any) {
        return e
    }
}

export const getArtist = async (artistID:string):Promise<ArtistData> => {
    try {
        const search = await spotifySearch(artistID,'artist','queryArtistOverview')
        const data:ArtistData = await search.json();
        return data
    } catch (e:any) {
        return e
    }
}

export const getTotalStreams = (tracksV2:TracksV2):number =>  {
    let totalStreams = 0;
    for (let i = 0; i < tracksV2.items.length; i++) {
        totalStreams += parseInt(tracksV2.items[i].track.playcount)
    }
    return totalStreams
}