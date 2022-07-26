
import { Request,Response } from 'express'

export default {

  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: "Create"
    })
  }),

  login: ((req: Request,res: Response) => {
    res.status(200).json({
      message: {
        USER: res.locals.user,
        TOKEN: res.locals.token
      }
    })
    res.locals.user = undefined
    res.locals.token = undefined
  }),

  logout: ((req: Request, res: Response) => {
    res.status(200).json({
        message: "Logout"
    })
  }),
  authenticate: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        user: res.locals.user
      }
    }) 
    res.locals.user = undefined
  })
}
