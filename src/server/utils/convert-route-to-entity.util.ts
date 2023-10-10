const mapping: Record<string, string> = {
  candidates: 'candidate',
  elections: 'election',
  guests: 'guest',
  universities: 'university',
  users: 'user',
  votes: 'vote',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
