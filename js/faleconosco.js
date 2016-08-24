function validar() {
	var usuario = form1.tEmail.value.substring(0, form1.tEmail.value.indexOf("@"));
	var dominio = form1.tEmail.value.substring(form1.tEmail.value.indexOf("@")+ 1, form1.tEmail.value.length);
	var nome = form1.tNome.value;
	var telefone = form1.tTelefone.value;
	var msg = form1.tMsg.value;

	if(nome == "" || (usuario == "" && dominio == "") || msg == ""){
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

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }

}