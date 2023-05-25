const db = require('../models');

const seed = async () => {
    try {
        await db.sequelize.sync({ force: true });

        const users = [
            { id: 1, username: 'Employee User', role: 'employee' },
            { id: 2, username: 'Owner User', role: 'owner' }
        ];

        await Promise.all(users.map(user => db.users.create(user)));

        const branches = [
            { id: 1, name: 'Branch #1', full_address: 'Istanbul, Turkey', latitude: 1.0, longitude: 1.0, phone: '123-456-7890' },
            { id: 2, name: 'Branch #2', full_address: 'Izmir, Turkey', latitude: 2.0, longitude: 2.0, phone: '123-456-7891' },
            { id: 3, name: 'Branch #3', full_address: 'Ankara, Turkey', latitude: 3.0, longitude: 3.0, phone: '123-456-7892' },
            { id: 4, name: 'Branch #4', full_address: 'Antalya, Turkey', latitude: 4.0, longitude: 4.0, phone: '123-456-7893' },
            { id: 5, name: 'Branch #5', full_address: 'Eskişehir, Turkey', latitude: 5.0, longitude: 5.0, phone: '123-456-7894' },
            { id: 6, name: 'Branch #6', full_address: 'Muğla, Turkey', latitude: 6.0, longitude: 6.0, phone: '123-456-7895' }
        ];

        await Promise.all(branches.map(branch => db.branches.create(branch)));

        console.log('Database seeded!');
    } catch (err) {
        console.error(err);
    } finally {
        await db.sequelize.close();
    }
};

seed();