import User from '../../../model/User'
import validator  from 'validator'
import bcrypt from 'bcrypt'

import { IUser } from '../../../interface/user'

interface IValidate {
  create(user: Partial<IUser>): Promise<any>;
  login(password: string , encPassword: string): Promise<boolean>;
}

export class Validate implements IValidate {
  
  constructor(public error: any = {}) 
    {

    }


  async create(user: IUser){
    
    for(let d of Object.entries(user)){
      if(d[1].trim() === '')
        {
          this.error[d[0]] = `${d[0]} Require`
        }
    }  
    
    let _user = await User.findOne({ email: user.Email })
    
    if(_user !== null)
      {
        this.error['Email'] = 'Email already exist'
      }
    
    if(user.Password.trim() !== user.ConfirmPassword.trim())
      {
        this.error['Password'] = 'Password not match'
      }
    if(user.Password.includes(' '))
      {
        this.error['Password'] = 'Invalid Password'
      }
    if(user.Password.trim().length < 5)
      {
        this.error['Password'] = 'Password is too short'
      }

    return this.error

  }

  async login(password: string = '', encPassword: string = ''): Promise<boolean>{
    const isMatch = await bcrypt.compare(password,encPassword)
    return isMatch
  }

}

