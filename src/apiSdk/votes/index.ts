import queryString from 'query-string';
import { VoteInterface, VoteGetQueryInterface } from 'interfaces/vote';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVotes = async (query?: VoteGetQueryInterface): Promise<PaginatedInterface<VoteInterface>> => {
  return fetcher('/api/votes', {}, query);
};

export const createVote = async (vote: VoteInterface) => {
  return fetcher('/api/votes', { method: 'POST', body: JSON.stringify(vote) });
};

export const updateVoteById = async (id: string, vote: VoteInterface) => {
  return fetcher(`/api/votes/${id}`, { method: 'PUT', body: JSON.stringify(vote) });
};

export const getVoteById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/votes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVoteById = async (id: string) => {
  return fetcher(`/api/votes/${id}`, { method: 'DELETE' });
};
