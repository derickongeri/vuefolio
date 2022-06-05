
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/hero', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/IndexPage.vue') },
      { path: '/projects', component: () => import('pages/IndexPage.vue') },
      { path: '/contacts', component: () => import('pages/IndexPage.vue') },
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
