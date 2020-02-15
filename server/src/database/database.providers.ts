import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/users.entity'

export const databaseProviders = [
    {
        provide:'SEQUELIZE',
        useFactory: async() =>{
            const sequelize = new Sequelize({
                dialect:'mssql',
                host:'localhost',
                port:1433,
                username:'sa',
                password:'root',
                database:'test',
                define:{timestamps:false}   
            });
            sequelize.addModels([User]);

            await sequelize.sync(
                // {force:true}
                
            );
            return sequelize
        }
    }
]