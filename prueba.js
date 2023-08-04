function eliminarRepetidosConsecutivos(cadena) {
  let resultado = '';
  let caracterAnterior = '';

  for (let i = 0; i < cadena.length; i++) {
    const caracterActual = cadena[i];

    if (caracterActual !== caracterAnterior) {
      resultado += caracterActual;
      caracterAnterior = caracterActual;
    }
  }

  return resultado;
}

console.log(eliminarRepetidosConsecutivos("hhoooolldadadqaaaaadaa"));