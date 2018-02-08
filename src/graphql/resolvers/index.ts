import { user, users, addUser } from './user';
import { addTask, tasks } from './task';

export type Resolver<T = any> = (_: any, args: any, context: any) => T;

const authLogin = (resolver: Resolver): Resolver => {
  return resolver;
};
export const resolvers = {
  Query: {
    user: authLogin(user),
    users,
    tasks,
  },
  Mutation: {
    addUser,
    addTask,
  },
};
