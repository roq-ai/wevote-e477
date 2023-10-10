import queryString from 'query-string';
import { ElectionInterface, ElectionGetQueryInterface } from 'interfaces/election';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getElections = async (
  query?: ElectionGetQueryInterface,
): Promise<PaginatedInterface<ElectionInterface>> => {
  return fetcher('/api/elections', {}, query);
};

export const createElection = async (election: ElectionInterface) => {
  return fetcher('/api/elections', { method: 'POST', body: JSON.stringify(election) });
};

export const updateElectionById = async (id: string, election: ElectionInterface) => {
  return fetcher(`/api/elections/${id}`, { method: 'PUT', body: JSON.stringify(election) });
};

export const getElectionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/elections/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteElectionById = async (id: string) => {
  return fetcher(`/api/elections/${id}`, { method: 'DELETE' });
};
