export default function idadeValida(campo) {
  const dataNascimento = new Date(campo.value);
  validaIdade(dataNascimento);

  console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMaiorDeIdade = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );
  return dataAtual >= dataMaiorDeIdade;
}
