import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'marcos',
    password: '12346',
    techs: [
      'Node', 
      'React', 
      'Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({message: 'Hello World'});
}