<?php

// URL:
$ch = curl_init('https://guiadotransporte.com.br/api/cities/search');

// Obter retorno em $resultado:
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// -F
// Definir como POST:
curl_setopt($ch, CURLOPT_POST, true);

// -F
// Definir corpo, como multipart/form-data:
curl_setopt($ch, CURLOPT_POSTFIELDS, ['query' => $_POST['query']]);

$resultado = json_decode(curl_exec($ch));
curl_close($ch);

$autocomplete = [];

foreach ($resultado as $key => $cidade) {
  $autocomplete['suggestions'][] = $cidade;
}

echo json_encode($autocomplete);
