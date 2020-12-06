// module.exports = function(sequelize, DataTypes) {
//     var search = sequelize.define("search", {
//       arist: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       album: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       track: {
//         type: DataTypes.STRING,
//         defaultValue: "Personal"
//       }
//     });
//     return search;
//   };