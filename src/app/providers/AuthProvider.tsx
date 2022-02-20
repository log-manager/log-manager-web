import { User } from '@app/types/models';

interface AuthContextState {
  user?: User;
  reload: () => Promise<void>;
}
