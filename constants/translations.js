const translations = {
    StockSample: (status, quantity) => {
        if (status == "onbackorder") {
            return "Tilgjengelig på fjernlager"
        }
        if (status == "outofstock") {
            return "Tomt på lager"
        }
        if (status == "instock") {
            return quantity + " igjen på lager"
        }
    },
    
}

export default translations