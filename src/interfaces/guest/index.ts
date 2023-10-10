import { UserInterface } from 'interfaces/user';
import { UniversityInterface } from 'interfaces/university';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id: string;
  university_id: string;
  visit_date: any;
  purpose?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  university?: UniversityInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  university_id?: string;
  purpose?: string;
  notes?: string;
}
