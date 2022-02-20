export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Log {
  id: string;
  logType: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: User;
}
