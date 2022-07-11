

import { Request,Response,NextFunction } from "express"
import { __User } from '../class/user'


export async function create (req: Request, res: Response, next: NextFunction) {
  
  const { firstName,lastName,email,password,confirmPassword } = req.body
  const user = new __User()
  const error:any  = await user.create({Firstname: firstName, Lastname: lastName,Email: email,Password: password,ConfirmPassword: confirmPassword}) 
  
  if(error)
    {
      res.status(400).json({
        error: error
      })
      return
  }


  next()
  return 
}

export async function uid () {
  return await Date.now().toString(36) + Math.random().toString(36).substr(2)
}
