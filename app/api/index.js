/**
 * Public method to get list of users
 * @returns {Promise<*>}
 */
import { APIVersionV1, get } from 'app/api/apiBase';

export const usersAPI = async () => {
  const url = `https://api.github.com/users?since=135`;
  const response = await get(url, APIVersionV1);
  return response;
};
