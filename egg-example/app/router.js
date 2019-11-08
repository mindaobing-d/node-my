'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.home.index);
  router.get('/list',controller.home.list);
  router.get('/data',controller.home.data);
  router.get('/account',controller.home.account);
  router.post('/create',controller.home.create);
  router.post("/deng",controller.home.deng)
};