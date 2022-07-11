


import { Express, Request, Response, NextFunction } from "express"

module.exports = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Method', 'POST,GET,DELETE,PATCH,OPTIONS,GET')
    res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type,Token')
    res.setHeader('Access-Control-Allow-credentials', 'true')
    next()
  }) 
  return
}
