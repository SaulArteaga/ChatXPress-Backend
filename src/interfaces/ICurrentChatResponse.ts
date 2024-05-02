import { IMessageResponse } from './IMessageResponse'

export interface ICurrentChatRespose {
  idChat: string
  name: String
  messages: IMessageResponse[]
}
