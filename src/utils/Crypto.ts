import { hash, compare, genSaltSync } from 'bcrypt'

const salt = genSaltSync(10)

const hashPassword = async (plainTextPwd: string) => {
  return await hash(plainTextPwd, salt)
}

const comparePassword = async (plainPassword: string, hashPassword: string) => {
  return await compare(plainPassword, hashPassword)
}

export const crypto = {
  hashPassword,
  comparePassword,
}
