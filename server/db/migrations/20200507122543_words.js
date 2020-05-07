
exports.up = knex => {
  return knex.schema.createTable('words', (table) => {
    table.increments('id').primary()
    table.string('gulumirrgin_word')
    table.string('english_word')
    table.string('category')
    table.string('image_url')
    table.string('audio_url')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('words')
}


