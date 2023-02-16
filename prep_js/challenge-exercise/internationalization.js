function greet(languageCode) {

  switch (languageCode[0]) {
    case 'en':
      switch (languageCode[1]) {
        case 'US': return 'Hi!';
        case 'GB': return 'Hello!';
        case 'AU': return 'Howdy!';
      }
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function extractLanguage (locale) {
  return locale.split(".")[0].split("_");
}

function localGreet (locale) {
  if (!locale) return "Please inpit a locale";
  return greet(extractLanguage(locale))
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'