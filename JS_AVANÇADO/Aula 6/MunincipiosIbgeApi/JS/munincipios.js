// https://servicodados.ibge.gov.br/api/docs/localidades#api-UFs-estadosGet
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

// fetch(url)

const getMunincipio = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios');
    const municipios = response.json();

    let addLi = "";
    let itemLi = "";

    for (let i = 0; i < municipios.length; i++) {
        addLi = document.createElement("li")
        itemLi = document.createTextNode(municipios[i].nome)

        addLi.appendChild(itemLi);
        document.getElementById("munincipio").appendChild(addLi)
    }

    console.log(response);
    console.log(municipios);
}

getMunincipio();