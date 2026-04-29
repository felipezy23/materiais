const sections = [

  {
    title: '1. Aritmética e Fundamentos',
    topics: [
      'Frações',
      'Potenciação',
      'Radiciação',
      'Razão e proporção',
      'Porcentagem',
      'Notação científica'
    ]
  },

  {
    title: '2. Álgebra Básica',
    topics: [
      'Expressões algébricas',
      'Produtos notáveis',
      'Fatoração',
      'Frações algébricas',
      'Racionalização',
      'Polinômios'
    ]
  },

  {
    title: '3. Equações e Inequações',
    topics: [
      'Equação do 1º grau',
      'Sistemas lineares',
      'Inequações',
      'Módulo',
      'Equação do 2º grau',
      'Inequação do 2º grau'
    ]
  },

  {
    title: '4. Funções',
    topics: [
      'Conceito de função',
      'Domínio e imagem',
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
      'Inequação exponencial',
      'Definição de logaritmo',
      'Propriedades dos logaritmos',
      'Equação logarítmica'
    ]
  },

  {
    title: '6. Geometria Plana',
    topics: [
      'Ângulos',
      'Triângulos',
      'Teorema de Pitágoras',
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
      'Círculo trigonométrico',
      'Identidades trigonométricas'
    ]
  },

  {
    title: '8. Geometria Espacial',
    topics: [
      'Prismas',
      'Cilindros',
      'Cones',
      'Esferas',
      'Volume'
    ]
  },

  {
    title: '9. Geometria Analítica',
    topics: [
      'Plano cartesiano',
      'Distância entre pontos',
      'Reta',
      'Parábola'
    ]
  },

  {
    title: '10. Pré-Cálculo',
    topics: [
      'Composição de funções',
      'Funções inversas',
      'Limites intuitivos',
      'Continuidade',
      'Sequências'
    ]
  },

  {
    title: '11. Cálculo',
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
