import { Request, Response, NextFunction } from 'express'
import { byUid } from './search'

export async function logout (req: Request, res: Response, next: NextFunction) {
  
  const { uid } = req.body

  const user = await byUid(uid)

  if(!user)
    {
      res.status(401).json({
        message: 'UnAuthorized'
      })
      return 
    }
  

  user.token = ''
  await user.save()

  next()
  return

}
