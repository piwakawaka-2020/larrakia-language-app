//Generic function for sorting an array by alphabetical order
function compareWords (a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

//Will sort an array of word objects by alphabetical order of their Gulumirrgin Word
export function compareGulumirrginWords (a, b) {
  return compareWords(a.gulumirrginWord.toUpperCase(), b.gulumirrginWord.toUpperCase())
}

//Will sort an array of word objects by alphabetical order of their English Word
export function compareEnglishWords (a, b) {
  return compareWords(a.englishWord.toUpperCase(), b.englishWord.toUpperCase())
}