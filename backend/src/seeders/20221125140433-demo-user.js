'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'supermarkets',
      [
        {
          id: 9,
          cityCode: '590',
          regionCode: '56',
          centerType: 'TYPE_B',
          opArea: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          cityCode: '679',
          regionCode: '56',
          centerType: 'TYPE_A',
          opArea: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          cityCode: '648',
          regionCode: '34',
          centerType: 'TYPE_A',
          opArea: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          cityCode: '679',
          regionCode: '56',
          centerType: 'TYPE_A',
          opArea: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          cityCode: '785',
          regionCode: '56',
          centerType: 'TYPE_B',
          opArea: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          cityCode: '555',
          regionCode: '94',
          centerType: 'TYPE_C',
          opArea: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: 2,
          category: 'TYPE_A',
          cuisine: 'Spanish',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          category: 'TYPE_A',
          cuisine: 'Italian',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          category: 'TYPE_B',
          cuisine: 'Italian',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          category: 'TYPE_B',
          cuisine: 'English',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          category: 'TYPE_C',
          cuisine: 'Mexican',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          category: 'TYPE_C',
          cuisine: 'Thai',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          category: 'TYPE_D',
          cuisine: 'Spanish',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('supermarkets', null, {});
  },
};
