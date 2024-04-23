import { Types } from 'mongoose'
import RoleDb from '../db/roles.db'

/**
 * This method call the calls the getStandarRoleId method
 * returns its result.
 * @returns a promise with the object id
 */

const getStandarRoleId = async (): Promise<Types.ObjectId> => {
  return await RoleDb.getStandarRoleId()
}

const RoleService = {
  getStandarRoleId,
}

export default RoleService
