Vue.component('componente2',{ //Vuex.js <-- Redux
	template:
	`
		<div style='background:blue;padding:2px;margin-bottom:20px'>

			<h2>Componente 2: {{ numero }} </h2>
			{{ nombre }}
		</div>
	`,
	props: ['numero'],
	data(){
		return{
			nombre: 'PW'
		}
	},
	mounted(){
		this.$emit('nombreComp2',this.nombre)
	}
})