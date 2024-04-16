import { Types } from 'mongoose'
import { role } from '../models/role'

const getStandarRoleId = async (): Promise<Types.ObjectId> => {
  const standarRole = await role.find({ nameRole: 'user' })
  return standarRole[0]._id
}

const RoleDb = {
  getStandarRoleId,
}

export default RoleDb
