import { IMessageResponse } from './IMessageResponse'

/**
 * This is the interface for the received socket
 */
export interface ISockedRecieved {
  room: string
  message: IMessageResponse
}
