import { Injectable,Inject } from '@nestjs/common';
import { User } from '../models/users.entity';
import { CreateUserDto } from '../dto/createUser.dto';



@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private readonly userRepository: typeof User
    ){}

    async getAllUsers(): Promise<User[]>{
        return await this.userRepository.findAll<User>();
    }

    async createUser(createUser: CreateUserDto): Promise<User>{
        return await this.userRepository.create<User>(createUser);
    }
    
    async deleteUser(email: string){
        return await this.userRepository.findOne(
            {where:{'email':email}}
        ).then(
            user=>{
            user.destroy();
        },err =>{
            console.log(err);
        }
        )
    }

    async updateUser(email:string,name:string, age:number){
        return await this.userRepository.findOne(
            {where:{'email':email}}
        ).then(
            user=>{
                user.update({'name':name,'age':age})
            },err=>{
                console.log(err);
            }
        )
    }

}
