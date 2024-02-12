export const routes = {
  logIn: '/login',
  users:{
    list: '/users',
  },
  channels:{
    list: '/channels',
    create: '/channels/create',
    edit: (id:string) => `/channels/${id}/edit`,
    view: (id:string) => `/channels/${id}/view`,
  }


};
