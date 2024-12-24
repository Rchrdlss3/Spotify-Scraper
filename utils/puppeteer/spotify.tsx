import puppeteer from "puppeteer";
import { AlbumData } from "../../models/album/albumModel";
const BeyonceLink = '3DiDSECUqqY1AuBP8qtaIa'
//...artist/
const SpotifyLink = 'https://open.spotify.com'


export const spotifyHelper = async (path,ID,callBack:(data) => void) => {
    try {
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto(`${SpotifyLink}/${path}/${ID}`);
        page.on('response', async (response) => {
            if (response.url().includes('getAlbum')) {
                const data = await response.json()
                callBack?.(data)
            } 
        })
    } catch (e) {
        return e
    }
}
// 'artist' 'album'



// export const getAlbum = async (albumID:string,callBack: (album:AlbumData) => void):Promise<any> => {
//     try {
//         const browser = await puppeteer.launch({headless:true});
//         const page = await browser.newPage();
//         await page.goto(`${SpotifyLink}/album/${albumID}`);
//         page.on('response', async (response) => {
//             if (response.url().includes('getAlbum')) {
//                 const data = await response.json()
//                 callBack?.(data)
//             } 
//         })
//     } catch (e) {
//         return e
//     }
// }
// Only differnce is path, and what the response url includes.
// export const getArtist = async (artistID:string,callBack:(artist) => void) => {
//     try {
//         const browser = await puppeteer.launch({headless:true});
//         const page = await browser.newPage();
//         await page.goto(`${SpotifyLink}/artist/${artistID}`)
//         page.on('response',async (response) => {
//             if (response.url().includes('')) {
//                 const data = await response.json()
//                 callBack?.(data)
//             }
//         })
//     } catch (e) {
//         return e
//     }
// }