import { UserInterface } from 'interfaces/user';
import { CandidateInterface } from 'interfaces/candidate';
import { ElectionInterface } from 'interfaces/election';
import { GetQueryInterface } from 'interfaces';

export interface VoteInterface {
  id?: string;
  user_id: string;
  candidate_id: string;
  election_id: string;
  vote_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  candidate?: CandidateInterface;
  election?: ElectionInterface;
  _count?: {};
}

export interface VoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  candidate_id?: string;
  election_id?: string;
}
