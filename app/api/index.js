/**
 * Public method to get list of users
 * @returns {Promise<*>}
 */
import { APIVersionV1, get, constructQueryWithParams } from 'app/api/apiBase';

export const usersAPI = async since => {
  const url = `https://api.github.com/users?${constructQueryWithParams({
    since: since
  })}`;
  const response = await get(url, APIVersionV1);
  return response;
};

export const userDetailAPI = async username => {
  const url = `https://api.github.com/users/${username}`;
  const response = await get(url, APIVersionV1);
  return response.json;
};
