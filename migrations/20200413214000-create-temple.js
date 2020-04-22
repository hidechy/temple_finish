module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('t_temple', {
            id: {allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
            year: {type: Sequelize.STRING},
            month: {type: Sequelize.STRING},
            day: {type: Sequelize.STRING},
            temple: {type: Sequelize.STRING},
            memo: {type: Sequelize.STRING},
            address: {type: Sequelize.STRING},
            station: {type: Sequelize.STRING},
            created_at: {allowNull: false, type: Sequelize.DATE},
            updated_at: {allowNull: false, type: Sequelize.DATE}
        });
    },

    down: (queryInterface, Sequelize) => {
    }
}
