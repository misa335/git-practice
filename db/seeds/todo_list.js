/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo_list').del()
  await knex('todo_list').insert([
    {id: 1, todo: 'Study react', due_day: '2022-03-24'},
    {id: 2, colName: 'feed cats', due_day: '2022-03-25'},
    {id: 3, colName: 'laundry', due_day: '2022^03-26'}
  ]);
};
