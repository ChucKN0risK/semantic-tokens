export interface Token {
  name: string;
  value: string;
}

export type FeedbackMessageTypes = 'info' | 'success' | 'warning' | 'error';
export interface FeedbackMessageType {
  text: string;
  type: FeedbackMessageTypes;
}
