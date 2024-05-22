import { hash, compare } from 'bcrypt'
import { CONFIG } from '../config/Config'

/**
 * Thid function gets a password through params and converts it in a hashed password
 * @param plainTextPwd
 * @returns The hashed password
 */
const hashPassword = async (plainTextPwd: string) => {
  return await hash(plainTextPwd, CONFIG.SALT)
}

/**
 * This funtion compares the two password passed through
 * params and chechs if they are equal.
 * @param plainPassword
 * @param hashPassword
 * @returns Boolean
 */
const comparePassword = async (plainPassword: string, hashPassword: string) => {
  return await compare(plainPassword, hashPassword)
}

export const crypto = {
  hashPassword,
  comparePassword,
}
