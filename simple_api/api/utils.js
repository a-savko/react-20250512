const config = require("../config");

const NOT_FOUND_STATUS = 404;

const reply = (res, body, timeout = config.responseDelay, status = 200) =>
  setTimeout(() => {
    res.status(body ? status : NOT_FOUND_STATUS).json(body);
  }, timeout);

const getById = (entities) => (id) =>
  entities.find((entity) => entity.id === id);

const updateById = (entities) => (id, data) => {
  const index = entities.findIndex((entity) => entity.id === id);
  entities[index] = { ...entities[index], ...data };

  return entities[index];
};

module.exports = { reply, getById, updateById };
