

import User from '../../../model/User'

export async function byUid (uid: string) {
  const user = await User.findOne({ uid })
  return user
}

export async function byToken(token: string) {
  const user = await User.findOne({ token })
  return user
}
