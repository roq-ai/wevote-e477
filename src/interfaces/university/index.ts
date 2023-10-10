import { ElectionInterface } from 'interfaces/election';
import { GuestInterface } from 'interfaces/guest';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface UniversityInterface {
  id?: string;
  description?: string;
  location?: string;
  founded_date?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  election?: ElectionInterface[];
  guest?: GuestInterface[];
  user?: UserInterface;
  _count?: {
    election?: number;
    guest?: number;
  };
}

export interface UniversityGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
