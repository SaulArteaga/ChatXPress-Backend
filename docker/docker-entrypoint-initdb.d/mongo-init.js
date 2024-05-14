db = db.getSiblingDB('db_proyect')

db.createCollection('roles')

admin_id = ObjectId()
user_id = ObjectId()

db.roles.insertMany([
  {
    _id: admin_id,
    nameRole: 'admin',
  },
  {
    _id: user_id,
    nameRole: 'user',
  },
])

db.createCollection('users')

user_one = ObjectId()
user_two = ObjectId()
user_three = ObjectId()

db.users.insertMany([
  {
    _id: user_one,
    name: 'admin',
    lastName: 'admin',
    email: 'admin@gmail.com',
    department: 'administrator',
    isActive: false,
    password: '$2b$10$P7r68yDty9vvUaPJOxMWiue.4mGJO7HJcrlA33u70HleI4j9.C8/O',
    idRole: admin_id,
  },
  {
    _id: user_two,
    name: 'user',
    lastName: 'user',
    email: 'user@gmail.com',
    department: 'prueba',
    isActive: false,
    password: '$2b$10$pNjNng/v8cElE7IRMChHculkQ7yUizK3iVbMp9cOtlzKRRbjNQQPK',
    idRole: user_id,
  },
  {
    _id: user_three,
    name: 'test',
    lastName: 'test',
    email: 'test@gmail.com',
    department: 'prueba',
    isActive: false,
    password: '$2b$10$pNjNng/v8cElE7IRMChHculkQ7yUizK3iVbMp9cOtlzKRRbjNQQPK',
    idRole: user_id,
  },
])

db.createCollection('messages')
message_one = ObjectId()
message_two = ObjectId()
message_three = ObjectId()
message_four = ObjectId()
message_five = ObjectId()

var date = '12-30-2023 12:40:29'

db.messages.insertMany([
  {
    _id: message_one,
    content: 'Hola como estas?',
    idUser: user_two,
    dateCreated: date,
  },
  {
    _id: message_two,
    content: 'Bien por ahora',
    idUser: user_three,
    dateCreated: date,
  },
  {
    _id: message_three,
    content: 'y tu?',
    idUser: user_three,
    dateCreated: date,
  },
  {
    _id: message_four,
    content: 'También estoy bien',
    idUser: user_two,
    dateCreated: date,
  },
  {
    _id: message_five,
    content: 'Me alegro',
    idUser: user_three,
    dateCreated: date,
  },
])

db.createCollection('chats')
chat_one = ObjectId()

db.chats.insertMany([
  {
    _id: chat_one,
    idUsers: [user_two, user_three],
    idMessages: [message_one, message_two, message_three, message_four, message_five],
  },
])
