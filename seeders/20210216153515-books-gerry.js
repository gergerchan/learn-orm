'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books', [{
        isbn: 12234,
        judul: "pergi cari cintah" ,
        sinopsis: "mantap sekali ceritanya nih",
        penulis: "gerry",
        genre: "horor",
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {});
  }
};
