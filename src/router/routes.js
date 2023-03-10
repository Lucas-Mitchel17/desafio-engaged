const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "characters-list",
        component: () => import("src/pages/CharactersListPage.vue"),
        redirect: { path: "characters-list/1" },
      },
      {
        path: "characters-list/:page",
        component: () => import("src/pages/CharactersListPage.vue"),
      },
      {
        path: "character",
        component: () => import("src/pages/CharacterPage.vue"),
        redirect: { path: "characters-list/1" },
      },
      {
        path: "character/:id",
        component: () => import("src/pages/CharacterPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
