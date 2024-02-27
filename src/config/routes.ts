export const routes = {
  logIn: "/login",
  users: {
    list: "/users",
  },

  channels: {
    list: "/channels",
    create: "/channels/create",
    edit: (id: string) => `/channels/${id}/edit`,
    view: (id: string) => `/channels/${id}/view`,
  },
  rules: {
    list: "/rules",
    create: "/rules/create",
    edit: (id: string) => `/rules/${id}/edit`,
  },
  events: {
    list: "/events",
    create: "/events/create",
    edit: (id: string) => `/events/${id}/edit`,
  },
};
