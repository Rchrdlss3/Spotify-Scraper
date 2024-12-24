import { spotifyHelper } from "./utils/puppeteer/spotify"

spotifyHelper('album','2UJwKSBUz6rtW4QLK74kQu',(data) => {console.log(data.data.albumUnion.tracksV2.items)})


