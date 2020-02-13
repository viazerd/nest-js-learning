import {User} from './models/users.entity';

export const userProviders = [{
    provide:'USER_REPOSITORY',
    useValue: User
}]