
var app = new Vue({
    el: '#app',
    data: {
        title: 'Vue JS 3',
        name: 'Lucas',
        lastName: 'Reichert',
        number: 2,
        products:[
            {
                title: 'Filme 1',
                image: './assets/images/1.jpg',
                stars: 2,
            },
            {
                title: 'Filme 2',
                image: './assets/images/2.jpg',
                stars: 0,
            },
            {
                title: 'Filme 3',
                image: './assets/images/3.jpg',
                stars: 3,
            },
        ],
        cart: [],
        
        styles: {
            color: '#FFFFFF',
            backgroundColor: '#000000',
        },
        themeBlack: true,
    },
    computed: {
        fullName(){
            return this.name + ' ' + this.lastName
        }
    },
    methods: {
        addCart (product) {
            this.cart.push(product)
        },
        inCart(product){
            return this.cart.indexOf(product) != -1 // se for -1 não está no carrinho, se ele estiver no carrinho vai  retornar o índice, que vai ser true
        },
        removeCard(product){
            this.cart = this.cart.filter((prod, index) => product != prod) // filtra e deixa no carrinho apenas os produtos que não são o product
        },
        toogleTheme(){
            this.themeBlack = !this.themeBlack
            if(this.themeBlack){
                this.styles.backgroundColor = '#000'
                this.styles.color = '#FFF'
            }else{
                this.styles.backgroundColor = '#FFF'
                this.styles.color = '#000'
            }
        }
    }
})