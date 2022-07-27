
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/StartPage.vue') },
      { path: 'list/', name: 'list', component: () => import('pages/IndexPage.vue') },
      { path: 'register/', name: 'create', component: () => import('pages/RegisterPage.vue') },
      { path: 'delete/', name: 'delete', component: () => import('pages/DeletePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
