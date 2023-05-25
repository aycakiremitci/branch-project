module.exports = (sequelize, Sequelize) => {
    return sequelize.define("branch", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        full_address: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.DOUBLE
        },
        longitude: {
            type: Sequelize.DOUBLE
        },
        phone: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });
};
