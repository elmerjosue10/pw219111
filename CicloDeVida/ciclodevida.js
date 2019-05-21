const app = new Vue({
	el: '#app',
	data: {
		saludo: 'Hola Vue'
	},
	beforeCreate(){
		console.log('Antes de crear el objeto Vue');
	},
	created(){
		console.log('El objeto fue creado')
	},
	beforeMount(){
		console.log('El DOM no se ha cargado')
	},
	mounted(){
		console.log('La pagina o DOM ha sido cargada')
	},
	beforeUpdate(){
		console.log('Antes de actualizar cualquier elemento de la pagina')
	},
	updated(){
		console.log('La pagina ha sido actualizada')
	},
	beforeDestroy(){
		console.log('Antes de destruir el objeto Vue')
	},
	destroyed(){
		console.log('El objeto Vue ha sido destruido')
	},
	methods:{
		destruir(){
			this.$destroy();
		}
	}
})