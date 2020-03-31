exports.formataStringEmData = stringData => {
  //stringData = '20/05/2020';
  const aux = stringData.split('-')
  return new Date(aux[0], parseInt(aux[1] - 1), aux[2])
}

exports.formataDataEmString = data => {
  console.log(typeof data)
  if (data) {
    //const [ano, mes, dia] = data.slice(0, 10).split('-')
    return `${data.getDay()}/${data.getMonth()}/${data.getYear()}`
  }
}
