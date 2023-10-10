import queryString from 'query-string';
import { UniversityInterface, UniversityGetQueryInterface } from 'interfaces/university';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUniversities = async (
  query?: UniversityGetQueryInterface,
): Promise<PaginatedInterface<UniversityInterface>> => {
  return fetcher('/api/universities', {}, query);
};

export const createUniversity = async (university: UniversityInterface) => {
  return fetcher('/api/universities', { method: 'POST', body: JSON.stringify(university) });
};

export const updateUniversityById = async (id: string, university: UniversityInterface) => {
  return fetcher(`/api/universities/${id}`, { method: 'PUT', body: JSON.stringify(university) });
};

export const getUniversityById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/universities/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUniversityById = async (id: string) => {
  return fetcher(`/api/universities/${id}`, { method: 'DELETE' });
};
