db = db.getSiblingDB("db_proyect");

db.createCollection("roles");

admin_id = ObjectId();
user_id = ObjectId();

db.roles.insertMany([
  {
    _id: admin_id,
    nameRole: "admin",
  },
  {
    _id: user_id,
    nameRole: "user",
  },
]);

db.createCollection("users");

user_one = ObjectId();
user_two = ObjectId();

db.users.insertMany([
  {
    _id: user_one,
    name: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    department: "administrator",
    isActive: false,
    password: "UnoDosTresCuatro",
    idRole: admin_id,
  },
  {
    _id: user_two,
    name: "prueba",
    lastName: "prueba",
    email: "prueba@gmail.com",
    department: "",
    isActive: false,
    password: "CincoSeisSieteOcho",
    idRole: user_id,
  },
]);
