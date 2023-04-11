import umCPF from './valida-cpf.js';
import idadeValida from './valida-idade.js';

const camposDoFomulario = document.querySelectorAll('[required]');
camposDoFomulario.forEach((campo) => {
  campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
  if (campo.name == 'cpf' && campo.value.length >= 11) {
    umCPF(campo);
  }
  if (campo.name == 'aniversario' && campo.value != '') {
    idadeValida(campo);
  }
}
