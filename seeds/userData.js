const { User } = require("../models");

const userdata = [
  {
    username: "JustinBieber",
    email: "justinbieber@abc.com",
    password: "abc1112222",
  },
  {
    username: "LebronJames",
    email: "justinbieber@abc.com",
    password: "abc1113333",
  },
  {
    username: "JoeBiden",
    email: "joebiden@abc.com",
    password: "abc1114444",
  },
  {
    username: "DonaldTrump",
    email: "donaldtrump@abc.com",
    password: "abc1115555",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
