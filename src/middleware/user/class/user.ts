

import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import User from '../../../model/User'


import { IUser } from '../../../interface/user'
import { Validate } from '../validate'
import { uid } from '../functions/create'

abstract class _User {
  abstract create(user: Partial<IUser>): Promise<void> 
  abstract login(): void 
  abstract logout(): void 
  abstract find(): void
}


export class __User extends _User {
  
  public validate: Validate 

  constructor()
    {
      super()
      this.validate = new Validate()
    }

  public async create(user: IUser): Promise<void>{
    const error:any = await this.validate.create(user)
    if(Object.keys(error).length >= 1)
      {
        return error
      }
    const _uid = await uid()
    const encrypt:string = await bcrypt.hash(user.Password!, 8)
    const data = new User({
      firstName: user.Firstname,
      lastName: user.Lastname,
      email: user.Email,
      password: encrypt,
      uid: _uid,
    })
    await data.save()
    return 
  }

  public login(): void {}
  public logout(): void {}
  public find(): void {}

}



