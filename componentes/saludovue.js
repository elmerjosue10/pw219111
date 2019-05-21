Vue.component('saludo',{
	template:
	`
		<div>
			<h1>{{ saludo }}</h1>			
		</div>
	`,
	data() {
		return {
			saludo: 'Hola desde un componente'
		}
	}
})