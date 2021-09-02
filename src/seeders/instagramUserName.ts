import InstagramService from "../services/instagramService";

const instagramService = new InstagramService();
const userNames = [
    'krystalllll_823',
    'tsai_ingwen',
    'power3067830678',
    'doctorkowj',
    'vickybaby61'
];

export default async function instagramUserNameSeed(){
    for(let name of userNames){
        let [data, err] = await instagramService.createInstagramUserName(name)
        if(err){
            console.error(err)
        }
    }
    console.log('insert Instagram User Name done!')
}
