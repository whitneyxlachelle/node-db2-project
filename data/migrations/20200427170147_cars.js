
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", table => {
       // table.integer("id").notNull().primary()
            table.increments("id") // same ^^
            table.integer("vin").notNull().unique()
            table.text("make").notNull()
            table.text("model").notNull()
            table.integer("mileage").notNull()
            table.text("transmissionType")
            table.text("titleStatus")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cars")
};


// exports.up = async function (knex) {
//         await knex.schema.createTable("cars", (table) => {
//             // table.integer("id").notNull().primary()
//             table.increments("id") // same ^^
//             table.integer("vin").notNull().unique()
//             table.text("make").notNull()
//             table.text("model").notNull()
//             table.integer("mileage").notNull()
//             table.text("transmissionType")
//             table.text("titleStatus")
//         })
//     };
    
//     exports.down = async function (knex) {
//         await knex.schema.dropTableIfExists("cars")
//     };