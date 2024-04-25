import { role } from '../models/role'

/**
 * This function finds and returns the id of
 * the standard role of the users.
 * @returns a promise with the object id
 */

const getRoleId = async (nameRole: string) => {
  const standarRole = await role.find({ nameRole: nameRole })
  return standarRole[0]
}

const RoleService = {
  getRoleId,
}

export default RoleService
