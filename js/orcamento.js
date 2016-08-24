function validar() {
	var usuario = form1.tEmail.value.substring(0, form1.tEmail.value.indexOf("@"));
	var dominio = form1.tEmail.value.substring(form1.tEmail.value.indexOf("@")+ 1, form1.tEmail.value.length);
	var nome = form1.tNome.value;
	var telefone = form1.tDDD.value;
	var msg = form1.tMsg.value;
	var endereco = form1.tEndereco.value;
	var bairro = form1.tBairro.value;
	var cidade = form1.tCidade.value;
	var uf = form1.tUF.value;
	var cep = form1.tCEP.value;
	console.log("entrou na função");


	if(nome == "" || (usuario == "" && dominio == "") || msg == "" || endereco == "" || bairro == "" || cidade == "" || uf == "" || cep == "" || telefone == ""){
		alert('Preencha todos os campos obrigatórios (*)');
		return false;
	}
	
	else if ((usuario.length >=1) &&
	    (dominio.length >=3) && 
	    (usuario.search("@")==-1) && 
	    (dominio.search("@")==-1) &&
	    (usuario.search(" ")==-1) && 
	    (dominio.search(" ")==-1) &&
	    (dominio.search(".")!=-1) &&      
	    (dominio.indexOf(".") >=1)&& 
	    (dominio.lastIndexOf(".") < dominio.length - 1)) {
	//document.getElementById("msgemail").innerHTML="E-mail válido";
	//alert("E-mail valido");
	}
	else{
	alert("E-mail invalido");
	return false;
	}
}

function somenteTelefone(num) {
    var er = /[^0-9-]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(num.value)) {
      campo.value = "";
    }
    else{
    	formatar('##-#####-####', campo);
    }
}

function somenteCPF(num) {
    var er = /[^0-9-.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(num.value)) {
      campo.value = "";
    }
    else{
    	formatar('##.###-###', campo);
    }
}

function somenteNumeros(num){
	var er = /[^0-9-]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(num.value)) {
      campo.value = "";
    }
}

function somenteLetras(letras){
	var er = /[^0-9-]/;
	var campo = letras;
	if(!er.test(letras.value)){
		campo.value = "";
	}
}

function formatar(mascara, documento){
	var i = documento.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(i)

	if (texto.substring(0,1) != saida){
	        documento.value += texto.substring(0,1);
	}

}