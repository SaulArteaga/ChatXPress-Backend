import { Types } from 'mongoose'
import { role } from '../models/role'

/**
 * This function finds and returns the id of
 * the standard role of the users.
 * @returns a promise with the object id
 */

const getStandarRoleId = async (): Promise<Types.ObjectId> => {
  const standarRole = await role.find({ nameRole: 'user' })
  return standarRole[0]._id
}

const RoleService = {
  getStandarRoleId,
}

export default RoleService
