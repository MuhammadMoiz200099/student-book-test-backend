/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('book', (table) => {
        table.bigint('id');
        table.text('book_name');
        table.text('author');
        table.text('borrowed_by');
        table.text('borrowed_date');
        table.text('returned_date');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('book');
};
