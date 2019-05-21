Vue.component('componente1',{ //bind <- (dos puntos)
	template:
	`
		<div style='background:red;padding:2px'>
			<h2>Componente 1: {{ numeroComponente1 }}</h2>		
			<button @click="numeroComponente1++">+</button>	
			<componente2 :numero="numeroComponente1" @nombreComp2="nombreComp1 = $event"></componente2>
			{{ nombreComp1 }}			
		</div>
	`,
	data() {
		return {
			numeroComponente1: 0,
			nombreComp1: ''
		}
	}
})