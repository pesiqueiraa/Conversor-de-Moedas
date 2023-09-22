const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 4.87
  const euroToday = 5.26
  const libraToday = 6.13
  // const bitToday = 128.05595

  if (currencySelect.value == 'dolar') {
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == 'euro') {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday)
  }
  if (currencySelect.value == 'libra') {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue / libraToday)
  }
  // if (currencySelect.value == 'bitcoin') {
  //   // Se o select estiver selecionado o valor de euro, entre aqui
  //   currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
  //     style: 'currency',
  //     currency: 'BTC',
  //   }).format(inputCurrencyValue / bitToday)
  // }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }

  if (currencySelect.value == 'libra') {
    currencyName.innerHTML = 'Libra'
    currencyImage.src = './assets/libra.png'
  }
  // if (currencySelect.value == 'bitcoin') {
  //   currencyName.innerHTML = 'BitCoin'
  //   currencyImage.src = './assets/bitcoin.png'
  // }

  convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)