export interface IAction {
  /**
   * Unique ID for operation like Edit, Delete
   */
  id?: string;
  /**
   * Dispatched action type
   */
  type: string;
  /**
   * Payload send with dispatch action
   */
  payload: any;
}
