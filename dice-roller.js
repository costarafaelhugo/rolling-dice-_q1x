let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < 1000; i++) {
  function rolardado() {
    return Math.floor(Math.random() * 6) + 1
  }

  let dado1 = rolardado()
  let dado2 = rolardado()
  let somaDados = dado1 + dado2

  if (somaDados === 2) {
    count[0]++
  } else if (somaDados === 3) {
    count[1]++
  } else if (somaDados === 4) {
    count[2]++
  } else if (somaDados === 5) {
    count[3]++
  } else if (somaDados === 6) {
    count[4]++
  } else if (somaDados === 7) {
    count[5]++
  } else if (somaDados === 8) {
    count[6]++
  } else if (somaDados === 9) {
    count[7]++
  } else if (somaDados === 10) {
    count[8]++
  } else if (somaDados === 11) {
    count[9]++
  } else if (somaDados === 12) {
    count[10]++
  }
  count.toString
}

function criaElementosDados() {
  let divMain = document.createElement("div")
  divMain.setAttribute("id", "dados")
  document.body.appendChild(divMain)
  let listaDados = document.createElement("ul")
  listaDados.setAttribute("id", "lista")
  divMain.appendChild(listaDados)

  //item1
  let item1 = document.createElement("LI")
  let res1 = document.createTextNode(
    `Numero 2 aparece por ${count[0]} vezes. `
  )
  item1.appendChild(res1)
  listaDados.insertBefore(item1, listaDados.childNodes[0])

  //item2
  let item2 = document.createElement("LI")
  let res2 = document.createTextNode(`Numero 3 aparece por ${count[1]} vezes.`)
  item2.appendChild(res2)
  listaDados.insertBefore(item2, listaDados.childNodes[1])

  //item3
  let item3 = document.createElement("LI")
  let res3 = document.createTextNode(`Numero 4 aparece por ${count[2]} vezes.`)
  item3.appendChild(res3)
  listaDados.insertBefore(item3, listaDados.childNodes[3])

  //item4
  let item4 = document.createElement("LI")
  let res4 = document.createTextNode(`Numero 5 aparece por ${count[3]} vezes.`)
  item4.appendChild(res4)
  listaDados.insertBefore(item4, listaDados.childNodes[4])

  //item5
  let item5 = document.createElement("LI")
  let res5 = document.createTextNode(`Numero 6 aparece por ${count[4]} vezes.`)
  item5.appendChild(res5)
  listaDados.insertBefore(item5, listaDados.childNodes[5])

  //item6
  let item6 = document.createElement("LI")
  let res6 = document.createTextNode(`Numero 7 aparece por ${count[5]} vezes.`)
  item6.appendChild(res6)
  listaDados.insertBefore(item6, listaDados.childNodes[6])

  //item7
  let item7 = document.createElement("LI")
  let res7 = document.createTextNode(`Numero 8 aparece por ${count[6]} vezes.`)
  item7.appendChild(res7)
  listaDados.insertBefore(item7, listaDados.childNodes[7])

  //item8
  let item8 = document.createElement("LI")
  let res8 = document.createTextNode(`Numero 9 aparece por ${count[7]} vezes.`)
  item8.appendChild(res8)
  listaDados.insertBefore(item8, listaDados.childNodes[8])

  //item9
  let item9 = document.createElement("LI")
  let res9 = document.createTextNode(
    `Numero 10 aparece por ${count[8]} vezes.`
  )
  item9.appendChild(res9)
  listaDados.insertBefore(item9, listaDados.childNodes[9])

  //item11
  let item11 = document.createElement("LI")
  let res11 = document.createTextNode(
    `Numero 11 aparece por ${count[9]} vezes.`
  )
  item11.appendChild(res11)
  listaDados.insertBefore(item11, listaDados.childNodes[10])

  //item12
  let item12 = document.createElement("LI")
  let res12 = document.createTextNode(
    `Numero 12 aparece por ${count[1]} vezes.`
  )
  item12.appendChild(res12)
  listaDados.insertBefore(item12, listaDados.childNodes[11])
}

criaElementosDados()

function criarGrafico() {
  let divGrafico = document.createElement("div")
  divGrafico.setAttribute("id", "graficos")
  document.body.appendChild(divGrafico)

  //coluna1
  let coluna1 = document.createElement("div")
  let texto1 = document.createElement('p')
  texto1 = document.createTextNode('2')
  coluna1.appendChild(texto1)
  coluna1.style.width = (`${count[0]}px`)
  coluna1.style.height = '1rem'
  coluna1.style.backgroundColor = 'green'
  divGrafico.appendChild(coluna1)

  //coluna2
  let coluna2 = document.createElement("div")
  let texto2 = document.createElement('p')
  texto2 = document.createTextNode('3')
  coluna2.appendChild(texto2)
  coluna2.style.width = (`${count[1]}px`)
  coluna1.style.height = '1rem'
  coluna2.style.backgroundColor = 'blue'
  divGrafico.appendChild(coluna2)

  //coluna3
  let coluna3 = document.createElement("div")
  let texto3 = document.createElement('p')
  texto3 = document.createTextNode('4')
  coluna3.appendChild(texto3)
  coluna3.style.width = (`${count[2]}px`)
  coluna1.style.height = '1rem'
  coluna3.style.backgroundColor = 'pink'
  divGrafico.appendChild(coluna3)

   //coluna4
   let coluna4 = document.createElement("div")
   let texto4 = document.createElement('p')
   texto4 = document.createTextNode('5')
   coluna4.appendChild(texto4)
   coluna4.style.width = (`${count[3]}px`)
   coluna1.style.height = '1rem'
   coluna4.style.backgroundColor = 'grey'
   divGrafico.appendChild(coluna4)

    //coluna5
    let coluna5 = document.createElement("div")
    let texto5 = document.createElement('p')
    texto5 = document.createTextNode('6')
    coluna5.appendChild(texto5)
    coluna5.style.width = (`${count[4]}px`)
    coluna1.style.height = '1rem'
    coluna5.style.backgroundColor = 'red'
    divGrafico.appendChild(coluna5)

     //coluna6
    let coluna6 = document.createElement("div")
    let texto6 = document.createElement('p')
    texto6 = document.createTextNode('7')
    coluna6.appendChild(texto6)
    coluna6.style.width = (`${count[5]}px`)
    coluna1.style.height = '1rem'
    coluna6.style.backgroundColor = 'violet'
    divGrafico.appendChild(coluna6)

     //coluna7
    let coluna7 = document.createElement("div")
    let texto7 = document.createElement('p')
    texto7 = document.createTextNode('8')
    coluna7.appendChild(texto7)
    coluna7.style.width = (`${count[6]}px`)
    coluna1.style.height = '1rem'
    coluna7.style.backgroundColor = 'yellowgreen'
    divGrafico.appendChild(coluna7)

     //coluna8
    let coluna8 = document.createElement("div")
    let texto8 = document.createElement('p')
    texto8 = document.createTextNode('9')
    coluna8.appendChild(texto8)
    coluna8.style.width = (`${count[7]}px`)
    coluna1.style.height = '1rem'
    coluna8.style.backgroundColor = 'darkred'
    divGrafico.appendChild(coluna8)

     //coluna9
    let coluna9 = document.createElement("div")
    let texto9 = document.createElement('p')
    texto9 = document.createTextNode('10')
    coluna9.appendChild(texto9)
    coluna9.style.width = (`${count[8]}px`)
    coluna1.style.height = '1rem'
    coluna9.style.backgroundColor = 'darkblue'
    divGrafico.appendChild(coluna9)

     //coluna10
    let coluna10 = document.createElement("div")
    let texto10 = document.createElement('p')
    texto10 = document.createTextNode('11')
    coluna10.appendChild(texto10)
    coluna10.style.width = (`${count[9]}px`)
    coluna1.style.height = '1rem'
    coluna10.style.backgroundColor = 'aliceblue'
    divGrafico.appendChild(coluna10)

     //coluna11
    let coluna11 = document.createElement("div")
    let texto11 = document.createElement('p')
    texto11 = document.createTextNode('12')
    coluna11.appendChild(texto11)
    coluna11.style.width = (`${count[10]}px`)
    coluna1.style.height = '1rem'
    coluna11.style.backgroundColor = 'turquoise'
    divGrafico.appendChild(coluna11)
}

console.log(count)
criarGrafico()

