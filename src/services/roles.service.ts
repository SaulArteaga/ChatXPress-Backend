import { Types } from 'mongoose'
import RoleDb from '../db/roles.db'

const getStandarRoleId = async (): Promise<Types.ObjectId> => {
  return await RoleDb.getStandarRoleId()
}

const RoleService = {
  getStandarRoleId,
}

export default RoleService
