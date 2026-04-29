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
  }

]

const roadmap = document.getElementById('roadmap')

sections.forEach((section, sectionIndex) => {

  const div = document.createElement('div')

  div.classList.add('section')

  let topicsHTML = ''

  section.topics.forEach((topic, topicIndex) => {

    const checkboxId = `check-${sectionIndex}-${topicIndex}`

    const checked =
      localStorage.getItem(checkboxId) === 'true'

    topicsHTML += `
      <label class="topic">

        <input
          type="checkbox"
          id="${checkboxId}"
          ${checked ? 'checked' : ''}
        >

        <span>${topic}</span>

      </label>
    `
  })

  div.innerHTML = `
    <h2>${section.title}</h2>

    <div class="topics">
      ${topicsHTML}
    </div>
  `

  roadmap.appendChild(div)

})

const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
)

checkboxes.forEach(checkbox => {

  checkbox.addEventListener('change', () => {

    localStorage.setItem(
      checkbox.id,
      checkbox.checked
    )

  })

})
