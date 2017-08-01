import 'graphql'

let graph = graphql("/graphql");
let allUsers = graph(`query { users(){} }`);

allUsers().then(function (users) {
  console.log(users)
})

const UserService = {



};
