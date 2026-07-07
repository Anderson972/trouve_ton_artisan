/* const sequelize = require('./src/config/db'); */

/* (async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à MySQL réussie');
  } catch (error) {
    console.error('❌ Connexion impossible :', error.message);
  } finally {
    await sequelize.close();
  }
})(); */

const { Artisan, Specialite } = require('./src/models');

(async () => {
  const artisans = await Artisan.findAll({ include: Specialite, limit: 3 });
  console.log(JSON.stringify(artisans, null, 2));
  process.exit();
})();