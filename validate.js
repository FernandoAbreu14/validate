$(document).ready(function () {

	Form("#esqueceu-login", ".required", "input-error");
	Form("#form-login-home", ".requerido", "input-error");

});

/* 
	Form(primeiroParametro, segundoParametro, terceiroParametro)

	primeiroParametro = id do formulário
	segundoParametro = classe default
	terceiro = classe sem o ponto da classe com estilo de error
*/

function Form(formulario, classe, input_error){

	$(formulario).on("submit", function() {
		var validate = true;
		$(classe).each(function(index, el) {
			if($(this).val() == '' || $(this).val() == null){
				$(this).addClass(input_error);
				validate = false;
			}

			if($(this).attr('type') == 'email'){
				var testEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				validate = testEmail.test($(this).val());
			}

			if($(this).attr('name') == 'rules'){
				if(!$(this).is(':checked')){
					$(this).parent().addClass(input_error);
				}
			}
		});

		return validate;
	});


	$(classe).each(function(index, el) {
		$(this).on("blur", function() { 
			var value = $(this).val();
			if(value != "") {
				$(this).removeClass(input_error);
			}	
		});
	});
}
