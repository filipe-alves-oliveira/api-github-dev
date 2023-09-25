import axios from "axios";
import { langColor } from "./config";

const api = axios.create({
  // significa que ao inves de colocar a url: http://localhost:5000 chumbada utilizamos do arquivo env
  baseURL: process.env.REACT_APP_API_BASE_URL,
});


export const getUser  = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`)

export default api;

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );
  delete stats.null;

  // criar um array com todas as keys, linguagens q temos
  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColor[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

    return stats
}
