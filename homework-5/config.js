const dbUser = "zorkiy";
const dbPassword = "Maks125";

const config = {
  port: 3113,
  secret: 'secret-key',
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@fooddeliveryproject-tytv2.mongodb.net/Homework4`
};

module.exports = config;