
exports.seed = function(knex) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals', audio_url: '/audio/Banimadla_vMemo.mp4'},
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals', audio_url: '/audio/Damabila_vMemo.mp4'},
        {gulumirrgin_word: 'Danggalaba', english_word: 'Saltwater Crocodile', category: 'animals', audio_url: '/audio/Dangalaba_vMemo.mp4'},
        {gulumirrgin_word: 'Danijarra', english_word: 'Long Bums', category: 'animals', audio_url: '/audio/Danijarra_vMemo.mp4'},
        {gulumirrgin_word: 'Datlawa', english_word: 'Frilled neck Lizard', category: 'animals', audio_url: '/audio/Datlawa_vMemo.mp4'},
        {gulumirrgin_word: 'Betbiyan', english_word: 'Flatback turtle', category: 'animals'},
        {gulumirrgin_word: 'Bilirrawarra', english_word: 'Black Cockatoos', category: 'animals'},
        {gulumirrgin_word: 'Birrdibirripba', english_word: 'dragonfly', category: 'animals'},
        {gulumirrgin_word: 'Gakingga', english_word: 'Magpie Goose', category: 'animals'},
        {gulumirrgin_word: 'Gilinggilingba', english_word: 'Flying Fox', category: 'animals'},
        {gulumirrgin_word: 'Gulppula', english_word: 'Green Tree Frog', category: 'animals'},
        {gulumirrgin_word: 'Damaldanggala', english_word: 'Dugong', category: 'animals'},
        {gulumirrgin_word: 'Dangutje', english_word: 'Goanna', category: 'animals'},
        {gulumirrgin_word: 'Dangutjbela', english_word: 'Kangaroo', category: 'animals'},
        {gulumirrgin_word: 'Doedlirra', english_word: 'Green Sea Turtle', category: 'animals'},
        {gulumirrgin_word: 'Malagujinba', english_word: 'Shark', category: 'animals'},
        {gulumirrgin_word: 'Milula', english_word: 'Wallabies', category: 'animals'},
        {gulumirrgin_word: 'Boewitjba', english_word: 'Bush Potato', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Damiyumba', english_word: 'Billy-goat Plum', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Dundil', english_word: 'Bush Peanut', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Mindilima', english_word: 'Native red apple', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Mindimilma', english_word: 'Native pink apple', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Moerrma', english_word: 'Black Plum', category: 'Fruits\'n\'Veg'},
        {gulumirrgin_word: 'Biyarmarrma', english_word: 'Pandanus', category: 'Plants'},
        {gulumirrgin_word: 'Dadbinggwa', english_word: 'Sugarbag(honey)', category: 'Plants'},
        {gulumirrgin_word: 'Dambilinggwa', english_word: 'Waterlilly', category: 'Plants'},
        {gulumirrgin_word: 'Mayilema', english_word: 'Speargrass', category: 'Plants'},
        {gulumirrgin_word: 'Nyirruck', english_word: 'Dad', category: 'Family'},
        {gulumirrgin_word: 'Batji', english_word: 'Good', category: 'Phrases'},
        {gulumirrgin_word: 'Ma Muk', english_word: 'See you later', category: 'Phrases'},
      ])
    })
}