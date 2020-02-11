$(document).ready(function(){
	$('#formularioCadastro').validate({
		rules:{
			nome:{
				required:true;

			},
			sobrenome:{

			},
			email:{

			},
			CPF:{

			},
			RG:{

			},
			CEP:{

			},
			Estado:{

			},
			Cidade:{

			},
			Rua:{

			},
			Bairro:{

			},
			Numero:{

			},
			Complemento:{

			},
			Telefone:{

			},
			Clular:{

			},

		},
		messages:{
			nome:{
				required: "Este campo é obrigatório"

			},
			sobrenome:{

			},
			email:{

			},
			CPF:{

			},
			RG:{

			},
			CEP:{

			},
			Estado:{

			},
			Cidade:{

			},
			Rua:{

			},
			Bairro:{

			},
			Numero:{

			},
			Complemento:{

			},
			Telefone:{

			},
			Clular:{

			}

		}
	});
});