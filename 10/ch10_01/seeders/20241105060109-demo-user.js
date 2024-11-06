'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const result = await queryInterface.bulkInsert('users',[{
      email:'abc@naver.com',
      password:'123',
      name :"aname",
      address:'seoul',
      createdAt:new Date(),
      updatedAt:new Date(),    
  },{
    email:'1abc@naver.com',
    password:'123',
    name :"aname",
    address:'seoul',
    createdAt:new Date(),
    updatedAt:new Date(),    
  }
]);
console.log(result);
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
