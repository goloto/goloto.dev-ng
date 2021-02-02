export interface Event {
  type: string;
  code?: string;
  link?: string;
  date: {
    start: string
    end?: string
  };
  description: {
    top: string,
    bottom: string
  };
}
