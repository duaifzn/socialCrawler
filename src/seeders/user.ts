import UserService from "../services/userService";
const userService = new UserService();
const users = [
    {
        email: 'duaifzn@gmail.com',
        password: 'aaaaa'
    },
]

export default async function userSeed(){
    for(const user of users){
        await userService.createUser(user.email, user.password)
    }
    console.log('insert user done!')
}
    

