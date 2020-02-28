exports.formataStringEmData = stringData => {
    //stringData = '20/05/2020';
    const aux = stringData.split('-');
    return new Date(aux[2], parseInt(aux[1]-1), aux[0]);
}