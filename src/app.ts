function app(): void {
  // Funcion que no devuelve un valor
  console.log('Inicio')
  setTimeout(() => {
    console.log('Después de 4 segundos')
  }, 4000)
  setTimeout(() => {
    console.log('Después de 0 segundos')
  }, 0)
  console.log('Final')
}

app()
