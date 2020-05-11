
exports.seed = function(knex) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals', audio_url: '/audio/Banimadla_vMemo.mp4', image_url: '/images/Banimadla.jpg' },
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals', audio_url: '/audio/Damabila_vMemo.mp4', image_url: '/images/Damabila.jpg' },
        {gulumirrgin_word: 'Danggalaba', english_word: 'Saltwater Crocodile', category: 'animals', audio_url: '/audio/Dangalaba_vMemo.mp4', image_url: '/images/Danggalaba.jpg' },
        {gulumirrgin_word: 'Danijarra', english_word: 'Long Bums', category: 'animals', audio_url: '/audio/Danijarra_vMemo.mp4', image_url: '/images/Danijarra.jpg' },
        {gulumirrgin_word: 'Datlawa', english_word: 'Frilled neck Lizard', category: 'animals', audio_url: '/audio/Datlawa_vMemo.mp4', image_url: '/images/Datlawa.jpg' },
        {gulumirrgin_word: 'Betbiyan', english_word: 'Flatback turtle', category: 'animals', image_url: '/images/Betbiyan.jpg' },
        {gulumirrgin_word: 'Bilirrawarra', english_word: 'Black Cockatoos', category: 'animals', image_url: '/images/Bilirrawarra.jpg' },
        {gulumirrgin_word: 'Birrdibirripba', english_word: 'dragonfly', category: 'animals', image_url: '/images/Birrdibirripba.png' },
        {gulumirrgin_word: 'Gakingga', english_word: 'Magpie Goose', category: 'animals', image_url: '/images/Gakingga.jpg' },
        {gulumirrgin_word: 'Gilinggilingba', english_word: 'Flying Fox', category: 'animals', image_url: '/images/Gilinggilingba.jpg' },
        {gulumirrgin_word: 'Gulppula', english_word: 'Green Tree Frog', category: 'animals', image_url: '/images/Gulppula.jpg' },
        {gulumirrgin_word: 'Damaldanggala', english_word: 'Dugong', category: 'animals', image_url: '/images/Damaldanggala.jpg' },
        {gulumirrgin_word: 'Dangutje', english_word: 'Goanna', category: 'animals', image_url: '/images/Dangutje.jpg' },
        {gulumirrgin_word: 'Dangutjbela', english_word: 'Kangaroo', category: 'animals', image_url: '/images/Dangutjbela.jpg' },
        {gulumirrgin_word: 'Doedlirra', english_word: 'Green Sea Turtle', category: 'animals', image_url: '/images/Doedlirra.jpg' },
        {gulumirrgin_word: 'Malagujinba', english_word: 'Shark', category: 'animals', image_url: '/images/Malagujinba.jpg' },
        {gulumirrgin_word: 'Milula', english_word: 'Wallabies', category: 'animals', image_url: '/images/Milula.jpg' },
        {gulumirrgin_word: 'Boewitjba', english_word: 'Bush Potato', category: 'Fruits\'n\'Veg', image_url: '/images/Boewitjba.jpg' },
        {gulumirrgin_word: 'Damiyumba', english_word: 'Billy-goat Plum', category: 'Fruits\'n\'Veg', image_url: '/images/Damiyumba.jpg' },
        {gulumirrgin_word: 'Dundil', english_word: 'Bush Peanut', category: 'Fruits\'n\'Veg', image_url: '/images/Dundil.png' },
        {gulumirrgin_word: 'Mindilima', english_word: 'Native red apple', category: 'Fruits\'n\'Veg', image_url: '/images/Mindilima.jpg' },
        {gulumirrgin_word: 'Mindimilma', english_word: 'Native pink apple', category: 'Fruits\'n\'Veg', image_url: '/images/Mindimilma.jpg' },
        {gulumirrgin_word: 'Moerrma', english_word: 'Black Plum', category: 'Fruits\'n\'Veg', image_url: '/images/Moerrma.jpg' },
        {gulumirrgin_word: 'Biyarmarrma', english_word: 'Pandanus', category: 'Plants', image_url: '/images/Biyarmarrma.jpg' },
        {gulumirrgin_word: 'Dadbinggwa', english_word: 'Sugarbag(honey)', category: 'Plants', image_url: '/images/Dadbinggwa.jpg' },
        {gulumirrgin_word: 'Dambilinggwa', english_word: 'Waterlilly', category: 'Plants', image_url: '/images/Dambilinggwa.png' },
        {gulumirrgin_word: 'Mayilema', english_word: 'Speargrass', category: 'Plants', image_url: '/images/Mayilema.png' },
        {gulumirrgin_word: 'Nyirruck', english_word: 'Dad', category: 'Family', },
        {gulumirrgin_word: 'Batji', english_word: 'Good', category: 'Phrases', image_url: '/images/BatjiKoala.jpg' },
        {gulumirrgin_word: 'Ma Muk', english_word: 'See you later', category: 'Phrases', image_url: '/images/MaMuk.jpg' },
      ])
    })
}