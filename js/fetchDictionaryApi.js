import {
  createText,
  createURLAudio,
  createListMean,
  cleanContainer,
} from './setElement.js';
export default function initFetchDictionaryApi() {
  const inputWord = document.querySelector('#input-word');
  const form = document.querySelector('.search-container');
  const responseContainer = document.querySelector('.response-container');
  form.addEventListener('submit', handleWord);

  function handleWord(event) {
    event.preventDefault();
    cleanContainer();
    const dictionaryApi = fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value.replace(
        ' ',
        '%20'
      )}`
    );
    dictionaryApi
      .then((response) => response.json())
      .then((dictionary) => {
        const [objectWord] = dictionary;
        const { word } = objectWord;
        const { audio } = objectWord.phonetics[0];
        createText(word);
        createURLAudio(audio);

        for (const mean of objectWord.meanings) {
          createListMean(mean.partOfSpeech, mean.definitions[0].definition);
        }
      });
    inputWord.value = '';
  }
}
