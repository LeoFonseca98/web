document.addEventListener('DOMContentLoaded', () => {
    const consultarBtn = document.getElementById('consultarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const errorText = document.getElementById('errorText');
  
    if (!consultarBtn || !resultadoDiv || !errorText) {
      console.error('Um ou mais elementos não foram encontrados no DOM.');
      return;
    }
  
    consultarBtn.addEventListener('click', async () => {
      const cep = document.getElementById('cep').value;
  
      resultadoDiv.innerHTML = '';
      errorText.innerHTML = '';
  
      if (!/^\d{8}$/.test(cep)) {
        errorText.textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
        return;
      }
  
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
  
        if (data.erro) {
          throw new Error('CEP não encontrado.');
        }
  
        resultadoDiv.innerHTML = `
          <p><strong>Logradouro:</strong> ${data.logradouro || 'N/A'}</p>
          <p><strong>Bairro:</strong> ${data.bairro || 'N/A'}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
      } catch (error) {
        errorText.textContent = error.message;
      }
    });
  });
  