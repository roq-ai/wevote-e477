import { VoteInterface } from 'interfaces/vote';
import { UserInterface } from 'interfaces/user';
import { ElectionInterface } from 'interfaces/election';
import { GetQueryInterface } from 'interfaces';

export interface CandidateInterface {
  id?: string;
  user_id: string;
  election_id: string;
  campaign_statement?: string;
  votes_received?: number;
  election_position?: string;
  created_at?: any;
  updated_at?: any;
  vote?: VoteInterface[];
  user?: UserInterface;
  election?: ElectionInterface;
  _count?: {
    vote?: number;
  };
}

export interface CandidateGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  election_id?: string;
  campaign_statement?: string;
  election_position?: string;
}
