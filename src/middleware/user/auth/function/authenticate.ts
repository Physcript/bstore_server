

import { Request,Response,NextFunction } from 'express'
import { __Auth } from '../class'

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  
  const token = req.headers.token ?? ''
  const uid = req.body.uid ?? ''
  

  let user

  const __auth = new __Auth()

  if(token !== '')
    {
      user = await __auth.token(`${token}`) 
    }
  else
    {
      user = await __auth.uid(uid)
    }

  if(!user) 
    {
      res.status(401).json({
        error: 'UnAuthorized'
      })
      return
    }

  user.password = ''  
  res.locals.user = user
  next()
}
