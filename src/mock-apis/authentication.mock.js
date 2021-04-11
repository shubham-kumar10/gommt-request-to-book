const users = [
  {
    id: 0,
    email: "johndoe@email.com",
    password: "12345",
    firstname: "John",
    lastname: "Doe",
    isHost: true,
    propertyList: [],
  },
];

export function authenticate(email, password) {
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
