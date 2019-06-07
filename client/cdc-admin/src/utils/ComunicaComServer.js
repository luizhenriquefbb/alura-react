import {BASE_URL} from "../Constantes";

export default class ComunicaComServer {
    constructor() {
        throw new Error("Não instanciar");
    }

    /**
     * Get ajax com vanillaJS
     * @param {*} url 
     * @param {Function} callback O que fazer com o dado recebido
     * @param {Array} params Lista de parametros para o callback
     * @returns {JSON}
     */
    static get(url) {
        // url = `${ComunicaComServer.burl}/${url}`;

        // retornar a promisse
        return new Promise((resolve, reject) => {

            let dataFromReturn = {};

            let xhr = new XMLHttpRequest();

            xhr.open("GET", url);


            // configurar comunicacao
            xhr.onreadystatechange = () => {
                // 0: requisição ainda não iniciada.
                // 1: conexão com o servidor estabelecida.
                // 2: requisição recebida.
                // 3: processando requisição.
                // 4: requisição concluída e a resposta esta pronta.
                if (xhr.readyState === 4) {

                    console.log('xhr.status', xhr.status);

                    // confirma que a requisicao ta OK. Teve resposta
                    if (xhr.status === 200) {
                        dataFromReturn = JSON.parse(xhr.responseText);
                        console.log('Resposta: ', JSON.parse(xhr.responseText));

                        resolve(dataFromReturn);

                    }
                    else {
                        const msg = `Não obteve resposta do servidor. Url: ${url}`
                        console.log('xhr: ', xhr);

                        reject({ "teveErro": true, "msg": msg });
                    }

                    return dataFromReturn;
                }



            };


            xhr.send();

            // possivel colocar um timeout na requisicao
            // setTimeout(() => reject('HOUVE PROBLEMAS'), 5000);

        });
    }

    static post(url, data) {
        url = `${BASE_URL}/${url}`
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
    
            xhr.onreadystatechange = () => {
    
                if (xhr.readyState === 4) {
    
                    if (xhr.status === 200) {
                        resolve({ msg: 'Negociação enviada com sucesso', response:JSON.parse(xhr.responseText)});
    
                    } else {
                        reject({ "msg": `Não foi possível enviar a negociação: ${xhr.responseText}` });
                    }
                }
            }

            xhr.send(JSON.stringify(data));

            // possivel colocar um timeout na requisicao
            // setTimeout(() => reject('HOUVE PROBLEMAS'), 5000);

        });
    }
}