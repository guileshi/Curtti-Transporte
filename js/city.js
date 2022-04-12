$("#origin, #destination").autocomplete({
  serviceUrl: 'autocomplete.php',
  params: {
    _token: $('meta[name="csrf-token"]').attr('content')
  },
  type: 'POST',
  dataType: 'json',
  minChars: '3',
  lookupLimit: '5',
  onSelect: function (suggestion) {
    $('input[name=url_' + $(this).attr('id') + ']').val(suggestion.url);
    localStorage.setItem($(this).attr('id'), suggestion.value);
    $('input[name=id_' + $(this).attr('id') + ']').val(suggestion.id);
  }
});