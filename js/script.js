$(document).ready(function() {
	$('form').on('submit', function (e) {
		e.preventDefault();
		
		const nome = $('input[name="nome"]').val().trim();
		const email = $('input[name="email"]').val().trim();
		const telefone = $('input[name="telefone"]'). val().trim();
		
		if (nome === '' || email === '' || telefone === '') {
			Swal.fire({
				icon: 'error',
				title: 'Campos obrigatórios',
				text: 'Por favor, preencha os campos obrigatórios.'
			});
			return;
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			Swal.fire({
				icon: 'warning',
				title: 'E-mail inválido',
				text: 'Informe um endereço de e-mail válido.'
			});
			return;
		}
		
		Swal.fire({
			icon: 'success',
			title: 'Formulário enviado!',
			text: 'Seus dados foram enviados com sucesso.',
			confirmButtonText: 'OK'
		});
		
		this.reset();
	});
});