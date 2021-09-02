import YoutubeService from "../services/youtubeService";
const youtubeService = new YoutubeService();
const channelIds = [
    'UCqkpNlntVaoxKpaoi8VoE6w',
    'UCeU05pwtEAreeF81saVb9XQ'
];

export default async function youtubeIdSeed(){
    for(let channelId of channelIds){
        await youtubeService.createChannelId(channelId)
    }
    console.log('insert youtube channel ids done!')
}
    

