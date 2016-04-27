// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('Event', {
//     title: {
//       type: DataTypes.STRING,
//       field: 'title'
//     },
//     description: {
//       type: DataTypes.STRING
//     },
//     time: {
//       type: DataTypes.STRING,
//     },
//     location: {
//       type: DataTypes.STRING,
//     }
//   }, {
//     instanceMethods: {
//       addNew: function(title, description, time, location) {
//         Event.sync({force: true}).then(function () {
//           return Event.create({
//             title: title,
//             description: description,
//             time: time,
//             location: location
//           });
//         });
//       }
//     }
//   });
// };

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    time: DataTypes.STRING
  }
  // , {
  //   classMethods: {
  //     associate: function(models) {
  //       Task.belongsTo(models.User, {
  //         onDelete: "CASCADE",
  //         foreignKey: {
  //           allowNull: false
  //         }
  //       });
  //     }
  //   }
  // }
);

  return Event;
};
