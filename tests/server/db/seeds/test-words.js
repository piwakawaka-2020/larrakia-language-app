
exports.seed = function(knex) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals'},
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals'},
        {gulumirrgin_word: 'Danggalaba', english_word: 'Saltwater Crocodile', category: 'animals'},
        {gulumirrgin_word: 'Danijarra', english_word: 'Long Bums', category: 'animals'},
        {gulumirrgin_word: 'Datlawa', english_word: 'Frilled neck Lizard', category: 'animals'},        
        {gulumirrgin_word: 'Mayilema', english_word: 'Speargrass', category: 'Plants'},
        {gulumirrgin_word: 'Nyirruck', english_word: 'Dad', category: 'Family'}
      ])
    })
}