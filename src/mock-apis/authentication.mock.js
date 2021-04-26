const users = [
  {
    id: 0,
    email: 'johndoe@email.com',
    password: '12345',
    firstname: 'John',
    lastname: 'Doe',
    isHost: true,
    hostId: 0,
  },
  {
    id: 0,
    email: 'jerry@email.com',
    password: '12345',
    firstname: 'Jerry',
    lastname: 'Doe',
    isHost: false,
    hostId: null,
  },
];

export function authenticate(email, password) {
  const id = users.findIndex((user) => user.email === email);
  if (id > -1 && users[id].password === password) {
    return users[id];
  } else {
    return undefined;
  }
}

export function addUser({ user }) {
  if (users.findIndex((u) => u.email === user.email) < 0) {
    user.id = users.length;
    users.push(user);
    console.log(users);
  } else {
    return null;
  }
}
