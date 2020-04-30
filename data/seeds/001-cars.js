
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 11111111111111111, make: 'Toyota', model: 'Solara', mileage: 50000, transmissionType: 'automatic', titleStatus: ''},
        {id: 2, vin: 22222222222222222, make: 'Honda', model: 'Accord', mileage: 150000, transmissionType: 'automatic', titleStatus: 'salvage'},
        {id: 3, vin: 33333333333333333, make: 'Chevrolet', model: 'Impala', mileage: 5000, transmissionType: '', titleStatus: 'clean'},
      ]);
    });
};
