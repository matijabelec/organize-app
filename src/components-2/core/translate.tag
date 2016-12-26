var translate = riot.observable()

translate.load = function(language){
  aja()
    .method('get')
    .url('/api/translations/' + language)
    .on('200', function(response){
      translate._language = response.language
      translate._translations = response.translations
      translate.trigger('translation-loaded', response)
    })
    .go()
}

translate.translations = function(){
  return translate._translations
}

translate.language = function(){
  return translate._language
}
