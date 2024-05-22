import { IMessageResponse } from './IMessageResponse'

/**
 * This is the interface for the responses of the current chat
 */
export interface ICurrentChatRespose {
  idChat: string
  name: string
  messages: IMessageResponse[]
}
