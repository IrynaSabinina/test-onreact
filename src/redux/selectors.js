export const contactsSelector = state => state.contacts.items;

export const filterSelector = state => state.contacts.filter;
export const tokenAuthSeletor = state => state.auth.token;
export const userAuthSelector = state => state.auth.user.email;
export const authStatusSelector = state => state.auth.status;
