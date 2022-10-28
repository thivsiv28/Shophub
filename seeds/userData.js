const { User } = require("../models");

const userdata = [
  {
    username: "JustinBieber",
    email: "justinbieber@abc.com",
    password: "abc1112222",
    name: "Justin Bieber",
  },
  {
    username: "LebronJames",
    email: "lebronjames@abc.com",
    password: "abc1113333",
    name: "Lebron James",
  },
  {
    username: "JoeBiden",
    email: "joebiden@abc.com",
    password: "abc1114444",
    name: "Joe Biden",
  },
  {
    username: "DonaldTrump",
    email: "donaldtrump@abc.com",
    password: "abc1115555",
    name: "Donald Trump"
  },
];

const seedUser = () => User.bulkCreate(userdata,  {individualHooks: true});

module.exports = seedUser;
