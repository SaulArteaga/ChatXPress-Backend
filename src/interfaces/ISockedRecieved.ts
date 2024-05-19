import { IMessageResponse } from './IMessageResponse'

export interface ISockedRecieved {
  room: string
  message: IMessageResponse
}
