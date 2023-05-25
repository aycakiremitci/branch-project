module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        role: {
            type: Sequelize.ENUM('owner', 'employee'),
            allowNull:false
        },
        username: {
            type: Sequelize.STRING,
            allowNull:false
        }
    }, {
        timestamps: false
    });
};
