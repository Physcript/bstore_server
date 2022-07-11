
import { Request,Response } from 'express'

export default {

  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: "Create"
    })
  }),

  login: ((req: Request,res: Response) => {
    res.status(200).json({
      message: "Login"
    })
  }),

  logout: ((req: Request, res: Response) => {
    res.status(200).json({
        message: "Logout"
    })
  })
}
