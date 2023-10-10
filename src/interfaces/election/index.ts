import { CandidateInterface } from 'interfaces/candidate';
import { VoteInterface } from 'interfaces/vote';
import { UniversityInterface } from 'interfaces/university';
import { GetQueryInterface } from 'interfaces';

export interface ElectionInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  description?: string;
  university_id: string;
  created_at?: any;
  updated_at?: any;
  candidate?: CandidateInterface[];
  vote?: VoteInterface[];
  university?: UniversityInterface;
  _count?: {
    candidate?: number;
    vote?: number;
  };
}

export interface ElectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  university_id?: string;
}
