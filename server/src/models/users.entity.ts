import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table
export class User extends Model<User>{
    @Column
    name: string;

    @Column
    email: string;

    @Column
    age:number

}