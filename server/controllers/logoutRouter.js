const logoutRouter = require('express').Router();

logoutRouter.get('/api/logout', async (request, response) => {
  response.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  });

  return response.sendStatus(204);
});

module.exports = logoutRouter;
