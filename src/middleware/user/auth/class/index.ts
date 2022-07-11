import { byUid,byToken } from '../../functions/search'

interface IAuth {
  token(t: string): Promise<any>
  uid(u: string): Promise<any>
}

export class __Auth implements IAuth{

  async token(t: string) {
    return byToken(t)
  }
  async uid(u: string) {
    return byUid(u)
  }

}
