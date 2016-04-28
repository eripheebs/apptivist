module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    githubID: DataTypes.INTEGER,
    username: DataTypes.STRING
  }
);
  return User;
};
