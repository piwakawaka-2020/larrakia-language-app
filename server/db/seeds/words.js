
exports.seed = function(knex) {
  return knex('words').del()
    .then(function () {
      return knex('words').insert([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals', audio_url: '/audio/Banimadla_Edited.mp4', image_url: '/images/Banimadla.jpg' },
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals', audio_url: '/audio/Damabila_Edited.mp4', image_url: '/images/Damabila.jpg' },
        {gulumirrgin_word: 'Danggalaba', english_word: 'Saltwater Crocodile', category: 'animals', audio_url: '/audio/Dangalaba_Edited.mp4', image_url: '/images/Danggalaba.jpg' },
        {gulumirrgin_word: 'Danijarra', english_word: 'Long Bums', category: 'animals', audio_url: '/audio/Danijarra_Edited.mp4', image_url: '/images/Danijarra.jpg' },
        {gulumirrgin_word: 'Datlawa', english_word: 'Frilled neck Lizard', category: 'animals', audio_url: '/audio/Datlawa_Edited.mp4', image_url: '/images/Datlawa.jpg' },
        {gulumirrgin_word: 'Betbiyan', english_word: 'Flatback turtle', category: 'animals', audio_url:'/audio/Betbiyan_Edited.mp4', image_url: '/images/Betbiyan.jpg' },
        {gulumirrgin_word: 'Billiwarra', english_word: 'Black Cockatoos', category: 'animals', audio_url:'/audio/Biliwarra_Edited.mp4', image_url: '/images/Bilirrawarra.jpg' },
        {gulumirrgin_word: 'Birrdibirripba', english_word: 'dragonfly', category: 'animals', audio_url: '/audio/Birrdibirripba_Edited.mp4', image_url: '/images/Birrdibirripba.png' },
        {gulumirrgin_word: 'Gakingga', english_word: 'Magpie Goose', category: 'animals', audio_url: '/audio/Gakingga_Edited.mp4', image_url: '/images/Gakingga.jpg' },
        {gulumirrgin_word: 'Gilinggilingba', english_word: 'Flying Fox', category: 'animals', audio_url: '/audio/Gilinggilingba_Edited.mp4', image_url: '/images/Gilinggilingba.jpg' },
        {gulumirrgin_word: 'Gulppula', english_word: 'Green Tree Frog', category: 'animals', audio_url: '/audio/Gulppula_Edited.mp4', image_url: '/images/Gulppula.jpg' },
        {gulumirrgin_word: 'Damaldanggala', english_word: 'Dugong', category: 'animals', audio_url: '/audio/Damaldanggala-Edited.mp4', image_url: '/images/Damaldanggala.jpg' },
        {gulumirrgin_word: 'Dangutje', english_word: 'Goanna', category: 'animals', audio_url: '/audio/Dangutje_Edited.mp4', image_url: '/images/Dangutje.jpg' },
        {gulumirrgin_word: 'Dangutjbela', english_word: 'Kangaroo', category: 'animals', audio_url: '/audio/Dangutjbela_Edited.mp4', image_url: '/images/Dangutjbela.jpg' },
        {gulumirrgin_word: 'Doedlirra', english_word: 'Green Sea Turtle', category: 'animals', audio_url: '/audio/Doedlirra_Edited.mp4', image_url: '/images/Doedlirra.jpg' },
        {gulumirrgin_word: 'Malagujinba', english_word: 'Shark', category: 'animals', audio_url: '/audio/Malagujinba_Edited.mp4', image_url: '/images/Malagujinba.jpg' },
        {gulumirrgin_word: 'Milula', english_word: 'Wallabies', category: 'animals', audio_url: '/audio/Milula_Edited.mp4', image_url: '/images/Milula.jpg' },
        {gulumirrgin_word: 'Boewitjba', english_word: 'Bush Potato', category: 'Fruits\'n\'Veg', audio_url: '/audio/Boewitjba_Edited.mp4', image_url: '/images/Boewitjba.jpg' },
        {gulumirrgin_word: 'Damiyumba', english_word: 'Billy-goat Plum', category: 'Fruits\'n\'Veg', audio_url: '/audio/Damiyumba_Edited.mp4', image_url: '/images/Damiyumba.jpg' },
        {gulumirrgin_word: 'Dundil', english_word: 'Bush Peanut', category: 'Fruits\'n\'Veg', audio_url: '/audio/Dundil_Edited.mp4', image_url: '/images/Dundil.png' },
        {gulumirrgin_word: 'Mindilima', english_word: 'Native red apple', category: 'Fruits\'n\'Veg', audio_url: '/audio/Mindjilima_Edited.mp4', image_url: '/images/Mindilima.jpg' },
        {gulumirrgin_word: 'Mindjilima', english_word: 'Native pink apple', category: 'Fruits\'n\'Veg', audio_url: '/audio/Mindimila_Edited.mp4', image_url: '/images/Mindimilma.jpg' },
        {gulumirrgin_word: 'Moerrma', english_word: 'Black Plum', category: 'Fruits\'n\'Veg', audio_url: '/audio/Moerrma_Edited.mp4', image_url: '/images/Moerrma.jpg' },
        {gulumirrgin_word: 'Biyarmarrma', english_word: 'Pandanus', category: 'Plants', audio_url: '/audio/Biyarmarrma_Edited.mp4', image_url: '/images/Biyarmarrma.jpg' },
        {gulumirrgin_word: 'Dadbinggwa', english_word: 'Sugarbag(honey)', category: 'Plants', audio_url: '/audio/Dadbinggwa_Edited.mp4', image_url: '/images/Dadbinggwa.jpg' },
        {gulumirrgin_word: 'Dambilinggwa', english_word: 'Waterlilly', category: 'Plants', audio_url: '/audio/Dambilinggwa_Edited.mp4', image_url: '/images/Dambilinggwa.png' },
        {gulumirrgin_word: 'Mayilema', english_word: 'Speargrass', category: 'Plants', audio_url: '/audio/Mayilema_Edited.mp4', image_url: '/images/Mayilema.png' },
      ])
    })
}