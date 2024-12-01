import { faker, Faker } from "@faker-js/faker"
import User from "../models/userModels.js";

const createUser = async(numUsers)=>{

    try{
        const usersPromise = [];

        for(let i = 0;i<numUsers ;i++){
            const tempUser = User.create({
                name:faker.person.fullName(),
                username:faker.internet.username(),
                password:"password",
                avatar:{
                    url:faker.image.avatar(),
                    public_id:faker.system.fileName(),
                }
            })
            usersPromise.push(tempUser);
        }
        await Promise.all(usersPromise);
        console.log("Users Created",numUsers);
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }

    
}
export {createUser}