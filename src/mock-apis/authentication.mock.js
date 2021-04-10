const users = [];

export function authenticate({ email, password }) {
  const id = users.findIndex((user) => user.email === email);
  if (users[id].password === password) {
    return users[id];
  } else {
    return undefined;
  }
}

export function addUser({ user }) {
  if (users.findIndex((u) => u.email === user.email) < 0) {
    user.id = users.length;
    users.push(user);
  } else {
    return null;
  }
}
