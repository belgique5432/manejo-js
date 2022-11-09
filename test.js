const Contenedor = require('./index.js');
const log = (p) =>console.log(p);


const item1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail:"",
}
const item2 ={
    title: "Calculadora",
    price: 234.56,
    thumbnail:""
}
const item3 ={
    title: "Globa Terraquo",
    price: 345.67,
    thumbnail:""
}


async function main() {
    const contenedor = new Contenedor('./productos.txt');
    let datos = await contenedor.getAll();
    log(datos)

    let id1 = await contenedor.save(item1)
    log(id1)

    let id2 = await contenedor.save(item2)
    log(id2)

}

main()