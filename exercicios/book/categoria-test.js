function testFiltroFavorito() {
    cat1 = new Categoria("Compra")

    cat1.novaFrase("Quanto custa")

    cat1.novaFrase("Aceita cartao")

    cat1.novaFrase("Tem desconto")

    cat1.favoritar(0)

    cat1.favoritar(2)

    favoritos = cat1.getFavoritos()

    console.log(favoritos)
}