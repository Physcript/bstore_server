import jwt from 'jsonwebtoken'
import config from '../../../config'


import { Request,Response,NextFunction } from 'express'
import { __User } from '../class/user'
import { byEmail } from './search'
import { Validate } from '../validate'
import { IUser } from '../../../interface/user'


export async function login(req: Request,res: Response,next: NextFunction) {
  
  const { email,password } = req.body
  const user = await byEmail(email) 
  if(user === null) 
    {
      res.status(400).json({
        message: 'Invalid email/password'
      })
      return
    }
  const validate = new Validate()
  const isMatch = await validate.login(password,user!.password) 
  
  if(isMatch === false) 
    {
      res.status(400).json({
        message: 'Invalid email/password'
      })
      return
    }
  let __user: any = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    uid: user.uid,
  } 

  const token = jwt.sign(__user, `${config.private.login}`)
  user.token = token
  await user.save()

  res.locals.user = user
  res.locals.token = token

  next()
  return

}
