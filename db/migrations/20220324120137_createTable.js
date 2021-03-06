/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('todo_list', (table) => {
        table.increments();
        table.string('todo', 100).notNullable();
        table.string('due_day');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('todo_list')
        .then(function(exists) {
            if(exists) {
                return knex.schema.dropTable('todo_list');
            }
        });
};
