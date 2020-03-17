//window.alert('Olá amigo.')
function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    
    msg.innerHTML = `Agora são exatamente ${hora} horas.`

    if (hora >=0 && hora <12){
        //BOM DIA.
        img.src = 'fotomanha.png'        
        document.body.style.background = '#fde55bb2'//comando para alterar a cor de fundo.
    }else if (hora >11 && hora <18){
        //BOA TARDE.
        img.src = 'fototarde.png'
        document.body.style.background = '#60faeda6'//comando para alterar a cor de fundo. 
    }else {
        //BOA NOITE.
        img.src = 'fotonoite.png'
        document.body.style.background = '#030b3698'//comando para alterar a cor de fundo.
    }

}