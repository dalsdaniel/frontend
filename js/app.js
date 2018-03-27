var vue = new Vue({
	el: '#app',
	data:{
		total:'',
		instance:'',
		instanceTabs:'',
		productoAdded:[],
		productos: [],
		categorias: [],
		viewCarrito:[],
	},

	methods: {
		mostrarCategorias: function(){
			entorno.$http.get('../api/categories.json').then(response =>{
				entorno.categorias = response.body.categories;
			}, response => {
				console.log(response);
			});
		},
		getAllProducts: function(){
			entorno.$http.get('../api/products.json').then(response =>{
				entorno.productos = response.body.products;
			}, response => {
				console.log(response);
			});
		},
		getProductsBebidas: function(){
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.instance.close();
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '1' || productosAll[i].sublevel_id == '2' || productosAll[i].sublevel_id == '3' || productosAll[i].sublevel_id == '4') {
						entorno.productos.push(productosAll[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		getProductsDesayunos: function(){
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.instance.close();
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '5' || productosAll[i].sublevel_id == '6' || productosAll[i].sublevel_id == '7' || productosAll[i].sublevel_id == '8' || productosAll[i].sublevel_id == '9') {
						entorno.productos.push(productosAll[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		getProductsAlmuerzos: function(){
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.instance.close();
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '10' || productosAll[i].sublevel_id == '11' || productosAll[i].sublevel_id == '12') {
						entorno.productos.push(productosAll[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		getProductsVinos: function(){
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.instance.close();
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '13' || productosAll[i].sublevel_id == '14' || productosAll[i].sublevel_id == '15') {
						entorno.productos.push(productosAll[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		geseosasCon: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosBebidas = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('bebidas');
				entorno.productos = [];
				arr = jQuery.grep(productosBebidas, function(a) {
					sublevel = a.sublevel_id;
					return (sublevel == '3');
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		gaseosasSin: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				entorno.instance.close();
				entorno.instanceTabs.select('bebidas');
				productosBebidas = response.body.products;
				entorno.productos = [];
				for (var i = 0; i < productosBebidas.length; i++) {
					if (productosBebidas[i].sublevel_id == '4') {
						entorno.productos.push(productosBebidas[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		f1Conf2: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosDesayunos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('desayunos');
				entorno.productos = [];
				for (var i = 0; i < productosDesayunos.length; i++) {
					if (productosDesayunos[i].sublevel_id == '7') {
						entorno.productos.push(productosDesayunos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		f1Conf3: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosDesayunos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('desayunos');
				entorno.productos = [];
				for (var i = 0; i < productosDesayunos.length; i++) {
					if (productosDesayunos[i].sublevel_id == '8') {
						entorno.productos.push(productosDesayunos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		f1Conf3Masf4: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosDesayunos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('desayunos');
				entorno.productos = [];
				for (var i = 0; i < productosDesayunos.length; i++) {
					if (productosDesayunos[i].sublevel_id == '9') {
						entorno.productos.push(productosDesayunos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		todosf5: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosAlmuerzos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('almuerzos');
				entorno.productos = [];
				for (var i = 0; i < productosAlmuerzos.length; i++) {
					if (productosAlmuerzos[i].sublevel_id == '11') {
						entorno.productos.push(productosAlmuerzos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		todosf6: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosAlmuerzos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('almuerzos');
				entorno.productos = [];
				for (var i = 0; i < productosAlmuerzos.length; i++) {
					if (productosAlmuerzos[i].sublevel_id == '12') {
						entorno.productos.push(productosAlmuerzos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		todosf8: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosVinos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('vinos');
				for (var i = 0; i < productosVinos.length; i++) {
					if (productosVinos[i].sublevel_id == '14') {
						entorno.productos.push(productosVinos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		todosf9: function() {
			entorno.$http.get('../api/products.json').then(response =>{
				productosVinos = response.body.products;
				entorno.instance.close();
				entorno.instanceTabs.select('vinos');
				entorno.productos = [];
				for (var i = 0; i < productosVinos.length; i++) {
					if (productosVinos[i].sublevel_id == '15') {
						entorno.productos.push(productosVinos[i]);
					}
				}
			}, response => {
				console.log(response);
			});
		},
		showAvalibles: function(data){
			if ($('#disponible').prop('checked')) {
				entorno.productos = [];
				arr = jQuery.grep(data, function(a) {
					return a.available == true;
				});
				entorno.productos = arr;
			}else{
				entorno.getAllProducts();
			}
		},
		showRank: function(){
			desde = $('#desde').val().replace(/\.|\,/g,'');
			hasta = $('#hasta').val().replace(/\.|\,/g,'');

			arr = jQuery.grep(entorno.productos, function(a) {
				precio = a.price;
				return (parseInt(precio) >= parseInt(desde) && parseInt(precio) <= parseInt(hasta));
			});
			entorno.productos = arr;
		},
		ordernarStock: function(data){
			if ($('#stock').prop('checked')) {
				stock = data.sort(function(obj1, obj2) {
					return obj2.quantity - obj1.quantity;
				});
				entorno.productos = stock;
			}else {
				entorno.getAllProducts();
			}
		},
		ordernarPrecio: function(data){
			if ($('#precio').prop('checked')) {
				$('#disponibilidad').prop('checked', false);
				$('#cantidad').prop('checked', false);
				precio = data.sort(function(obj1, obj2) {
					return obj1.price - obj2.price;
				});

				entorno.productos = precio;
			}else{
				precio = data.sort(function(obj1, obj2) {
					return obj2.price - obj1.price;
				});

				entorno.productos = precio;
			}
		},
		disponibles: function(data){
			if ($('#disponibilidad').prop('checked')){
				$('#precio').prop('checked', false);
				$('#cantidad').prop('checked', false);
				disponibles = data.sort(function(obj1, obj2) {
					return obj2.available - obj1.available;
				});

				entorno.productos = disponibles;
			}else{
				noDisponibles = data.sort(function(obj1, obj2) {
					return obj1.available - obj2.available;
				});

				entorno.productos = noDisponibles;
			}
		},
		ordenarCantidad: function(data){
			if ($('#cantidad').prop('checked')){
				$('#precio').prop('checked', false);
				$('#disponibilidad').prop('checked', false);
				disponibles = data.sort(function(obj1, obj2) {
					return obj2.quantity - obj1.quantity;
				});

				entorno.productos = disponibles;
			}else{
				noDisponibles = data.sort(function(obj1, obj2) {
					return obj1.quantity - obj2.quantity;
				});

				entorno.productos = noDisponibles;
			}
		},
		buscarTodos: function(){
			var data = $('#buscarTodos').val();
			entorno.$http.get('../api/products.json').then(response =>{
				var productos = response.body.products;
				arr = jQuery.grep(productos, function(a) {
					nombre = a.name;
					val = nombre.match(data);
					return (val);
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		buscarBebidas: function(){
			var data = $('#buscarBebidas').val();
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '1' || productosAll[i].sublevel_id == '2' || productosAll[i].sublevel_id == '3' || productosAll[i].sublevel_id == '4') {
						entorno.productos.push(productosAll[i]);
					}
				}
				var productos = entorno.productos;
				arr = jQuery.grep(productos, function(a) {
					nombre = a.name;
					val = nombre.match(data);
					return (val);
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		buscarDesayunos: function(){
			var data = $('#buscarDesayunos').val();
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '5' || productosAll[i].sublevel_id == '6' || productosAll[i].sublevel_id == '7' || productosAll[i].sublevel_id == '8' || productosAll[i].sublevel_id == '9') {
						entorno.productos.push(productosAll[i]);
					}
				}
				var productos = entorno.productos;
				arr = jQuery.grep(productos, function(a) {
					nombre = a.name;
					val = nombre.match(data);
					return (val);
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		buscarAlmuerzos: function(){
			var data = $('#buscarAlmuerzos').val();
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '10' || productosAll[i].sublevel_id == '11' || productosAll[i].sublevel_id == '12') {
						entorno.productos.push(productosAll[i]);
					}
				}
				var productos = entorno.productos;
				arr = jQuery.grep(productos, function(a) {
					nombre = a.name;
					val = nombre.match(data);
					return (val);
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		buscarVinos: function(){
			var data = $('#buscarVinos').val();
			entorno.$http.get('../api/products.json').then(response =>{
				productosAll = response.body.products;
				entorno.productos = [];
				for (var i = 0; i < productosAll.length; i++) {
					if (productosAll[i].sublevel_id == '13' || productosAll[i].sublevel_id == '14' || productosAll[i].sublevel_id == '15') {
						entorno.productos.push(productosAll[i]);
					}
				}
				var productos = entorno.productos;
				arr = jQuery.grep(productos, function(a) {
					nombre = a.name;
					val = nombre.match(data);
					return (val);
				});
				entorno.productos = arr;
			}, response => {
				console.log(response);
			});
		},
		getProductosCarrito: function(){
			var total = 0,
			items = 0
			var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
			if(undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0){
				_.forEach(cart.items, function(n, key) {
					items = (items + n.cant)
					total = total  + (n.cant * n.price)
				});
			}
			$('#totalItems').text(items)
			$('.totalAmount').text('$ '+total+ ' USD')
		},
		addProductoCarrito: function(data){
			cant = 1
			if(cant <= data.quantity){
				if(undefined != data){
					if(cant > 0){
						var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
						entorno.buscarProducto(cart,data.id,parseInt(cant),data.name,data.price,data.quantity);
						M.toast({html: 'Producto añadido al carrito', classes: 'rounded'});
					}else{
						M.toast({html: 'Solo se permiten cantidades mayores a cero', classes: 'rounded'});
					}
				}else{
					M.toast({html: 'Oops! algo malo ocurrió, inténtalo de nuevo más tarde', classes: 'rounded'});
				}
			}else{
				M.toast({html: 'No se pueden añadir más de este producto', classes: 'rounded'});
			}
		},
		buscarProducto: function(cart,id,cant,name,price,quantity){
			var curProd = _.find(cart.items, { 'id': id })
			if(undefined != curProd && curProd != null){
				if(curProd.cant < quantity){
					curProd.cant = parseInt(curProd.cant + cant)
				}else{
					M.toast({html: 'No se pueden añadir más de este producto', classes: 'rounded'});
				}
			}else{
				var prod = {
					id : id,
					cant : cant,
					name : name,
					price : price,
					quantity : quantity
				}
				cart.items.push(prod)
			}
			localStorage.setItem('cart',JSON.stringify(cart));
			entorno.getProductosCarrito();
			entorno.getProducts();
		},
		getProducts: function(){
			var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []};
			total = 0;
			if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
				M.toast({html: 'Tu carrito de compras esta vacio', classes: 'rounded'});
			}else{
				var items = '';
				_.forEach(cart.items, function(n, key) {
					total = total  + (n.cant * n.price);
					entorno.productoAdded[key] = n;
				});

				if(entorno.viewCarrito == null){
					entorno.viewCarrito = [];
				}

				localStorage.setItem('prodCarrito',JSON.stringify(entorno.productoAdded));
				localStorage.setItem('total',JSON.stringify(total));

				if (entorno.viewCarrito.length < entorno.productoAdded.length) {
					localStorage.setItem('viewCarrito',JSON.stringify(cart.items));
					entorno.viewCarrito = JSON.parse(localStorage.getItem('viewCarrito'));
				}else{
					entorno.viewCarrito = JSON.parse(localStorage.getItem('prodCarrito'));
				}
				entorno.total = JSON.parse(localStorage.getItem('total'));
			}
		},
		eliminarProducto: function(id, index){
			var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []};
			curProd = _.find(cart.items, { 'id': id });
			curProd.cant = curProd.cant - 1;
			if(curProd.cant > 0){
				localStorage.setItem('cart',JSON.stringify(cart));
				entorno.getProductosCarrito();
				entorno.getProducts();
			}else{
				entorno.eliminarProd(id, true, index);
			}
		},
		deleteP: function(id, index){
			var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []};
			var curProd = _.find(cart.items, { 'id': id });
			_.remove(cart.items, curProd);
			entorno.viewCarrito.splice(index, 1);
			localStorage.clear();
			entorno.total = '';
			if (cart.items.length == 0) {
				entorno.viewCarrito = [];
			}
			localStorage.setItem('cart',JSON.stringify(cart));
			entorno.getProductosCarrito();
			entorno.getProducts();
		},
		eliminarProd: function(id, remove, index){
			if(undefined != id){
				if(remove == true){
					entorno.deleteP(id, index);
				}else{
					entorno.deleteP(id, index);
				}
			}
		},
		comprarProductos: function(){
			localStorage.clear();
			entorno.productoAdded = [];
			entorno.total = '';
			entorno.viewCarrito = [];
			$('#modal1').modal('open');
		}
	},
	mounted: function() {
		entorno = this;
		var elem = document.querySelector('.sidenav');
		var el = document.querySelector('.tabs');
		entorno.instanceTabs = M.Tabs.init(el);
		entorno.instance = M.Sidenav.init(elem);
		$('.collapsible').collapsible();
		$('.modal').modal();
		entorno.mostrarCategorias();
		entorno.getAllProducts();

		var prodCarrito = JSON.parse(localStorage.getItem('prodCarrito'));
		entorno.viewCarrito = prodCarrito;
		var total = JSON.parse(localStorage.getItem('total'));
		entorno.total = total;

		$('ul.tabs').on('click', 'a', function(e) {
			if (e.currentTarget.innerText == 'TODOS LOS PRODUCTOS') {
				entorno.getAllProducts();
			}

			if (e.currentTarget.innerText == 'BEBIDAS') {
				entorno.getProductsBebidas();
			}

			if (e.currentTarget.innerText == 'DESAYUNOS') {
				entorno.getProductsDesayunos();
			}

			if (e.currentTarget.innerText == 'ALMUERZOS') {
				entorno.getProductsAlmuerzos();
			}

			if (e.currentTarget.innerText == 'VINOS') {
				entorno.getProductsVinos();
			}
		});
	}
})