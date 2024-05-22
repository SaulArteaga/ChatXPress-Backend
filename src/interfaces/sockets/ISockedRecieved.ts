import { IMessageResponse } from '../messages/IMessageResponse'

/**
 * This is the interface for the received socket
 */
export interface ISockedRecieved {
  room: string
  message: IMessageResponse
}
