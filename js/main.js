

async function exibir(){

    var busca = document.getElementById('nome').value.trim()
    var erros = document.getElementById('erro')
    var gif_ini = document.getElementById('gif_ini')
    var text_ini = document.getElementById('text_ini')
    var conteudo_villager = document.getElementById('conteudo_villager')

    

    var url = "https://api.nookipedia.com/villagers";

        
    var infos = {
        "X-API-Key": "cf36d5d9-e768-4d25-b172-9098ad81fa03",   
        "Accept-Version": "1.7.0",                     

};



    var resposta = await fetch(url, {
            method: "GET",  
                headers: infos 
        })

        

        

        if(!resposta.ok){
                gif_ini?.remove()
                text_ini?.remove()
                conteudo_villager?.remove()
                erros.innerHTML = `<h1>Data not found...</h1>`
                
        }

            var dados = await resposta.json()

            var villager = dados.find(villager => villager.name.toLowerCase() === busca.toLowerCase())

            if(!villager){
                gif_ini?.remove()
                text_ini?.remove()
                conteudo_villager?.remove()
                erros.innerHTML = `<h1>Data not found...</h1> `

        } else {

            gif_ini?.remove()
            text_ini?.remove()

            conteudo_villager.innerHTML =
                `

                <img class='villager_img' src= ${villager.image_url}>

                <img class= 'speech_bubble' src='./imgs/speech_bubble.png'>

                <h2 class='nome_text' > ${villager.name} </h2>

                <p class='especie_text'> Species:  ${villager.species} </p>

                <p class='perso_text'>Personality:  ${villager.personality} </p>

                <p class='genero_text'>Gender:  ${villager.gender} </p>

                <p class='aniversario_text'> Birthday :  ${villager.birthday_month} ${villager.birthday_day}</p>

                <p class='frase_text'> ${villager.quote} </p>

                <p class='container_size'> Hi </p>


                `
        }


            

            




}
