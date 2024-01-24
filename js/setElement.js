const responseContainer = document.querySelector('.response-container');

export function cleanContainer() {
  responseContainer.innerHTML = '';
}

export function createText(textParam) {
  const text = document.createElement('h2');
  text.innerText = textParam;
  responseContainer.appendChild(text);
}
export function createURLAudio(audioParam) {
  const audio = document.createElement('audio');
  audio.setAttribute('src', audioParam);
  audio.setAttribute('type', 'audio/mp3');
  audio.setAttribute('controls', true);
  responseContainer.appendChild(audio);
}
export function createListMean(partOfSpeech, definition) {
  const list = document.createElement('ul');
  const item = document.createElement('li');
  item.innerHTML = `<p>${partOfSpeech}</p><p>${definition}</p>`;
  list.appendChild(item);
  responseContainer.appendChild(list);
}
