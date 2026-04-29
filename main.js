const sections = [

  {
    title: '1. Aritmética e Fundamentos',
    topics: [
      'Frações',
      'Potenciação',
      'Radiciação',
      'Razão e proporção',
      'Porcentagem'
    ]
  },

  {
    title: '2. Álgebra Básica',
    topics: [
      'Produtos notáveis',
      'Fatoração',
      'Frações algébricas',
      'Polinômios'
    ]
  },

  {
    title: '3. Equações e Inequações',
    topics: [
      'Equação do 1º grau',
      'Inequações',
      'Equação do 2º grau'
    ]
  },

  {
    title: '4. Funções',
    topics: [
      'Função afim',
      'Função quadrática',
      'Função exponencial',
      'Função logarítmica'
    ]
  },

  {
    title: '5. Exponenciais e Logaritmos',
    topics: [
      'Equação exponencial',
      'Propriedades dos logaritmos',
      'Equação logarítmica'
    ]
  },

  {
    title: '6. Geometria Plana',
    topics: [
      'Triângulos',
      'Pitágoras',
      'Circunferência',
      'Áreas'
    ]
  },

  {
    title: '7. Trigonometria',
    topics: [
      'Seno',
      'Cosseno',
      'Tangente',
      'Círculo trigonométrico'
    ]
  },

  {
    title: '8. Pré-Cálculo',
    topics: [
      'Limites intuitivos',
      'Continuidade',
      'Funções inversas'
    ]
  },

  {
    title: '9. Cálculo',
    topics: [
      'Limites',
      'Derivadas',
      'Integrais'
    ]
  }

]

const roadmap = document.getElementById('roadmap')

sections.forEach(section => {

  const div = document.createElement('div')

  div.classList.add('section')

  div.innerHTML = `
    <h2>${section.title}</h2>

    <div class="topics">

      ${section.topics.map(topic => `
        <label class="topic">

          <input type="checkbox">

          <span>${topic}</span>

        </label>
      `).join('')}

    </div>
  `

  roadmap.appendChild(div)

})
