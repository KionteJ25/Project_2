module.exports = function(sequelize, DataTypes) {
   
  
  var Search = sequelize.define("Search", {
      artist: {
        type: DataTypes.STRING,
 
      },
      album: {
        type: DataTypes.STRING,
 
      },
      track: {
        type: DataTypes.STRING,

    }
    
    },
    {
      sync: {force: false},
      freezeTableName: true,
      timestamps: true
    }
    );

    return Search;
  
  };
  



