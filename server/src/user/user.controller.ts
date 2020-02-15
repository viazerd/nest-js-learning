import { Controller, Get, Post,Delete,Put, Body, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../models/users.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    public async getUsers(@Res() res: Response){
        this.userService.getAllUsers().then(
            results =>{
                if(results){
                    console.log(results);
                    res.json({message:'List of Users',data:results})
                }
            }, err =>{
                console.log(err);
            }
        );
    }

    @Post()
    public async createUser(@Body() body, @Res() res: Response){
        console.log(body);
        this.userService.createUser(body).then(
            result =>{
                if(result){
                    console.log(result.get());
                    res.json({messgae:'User Created',data:result.get()});
                }
            },err =>{
                console.log(err);
            }
        )


    }

    @Delete()
    public async deleteUser(@Body() body,@Res() res: Response){
        console.log(body['email']);
        this.userService.deleteUser(body['email']).then(
          res.json({message:'User Deleted'})
        )
    }

    @Put()
    public async updateUser(@Body() body,@Res() res: Response){
        console.log(body['email']);
    }
}
