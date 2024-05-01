import { message } from '../models/message'

const getTotalMessages = async () => {
  const messages = await message.find()
  return messages.length
}

const MessageService = {
  getTotalMessages,
}

export default MessageService
