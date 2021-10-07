# backend-leitor-de-frases
Atividade - expo-speech

Atividade da faculdade para desenvolvimento de app utilizando a lib expo-speech que fale(de forma aleatória) uma frases de um autor selecionado a partir do site 
https://www.pensador.com/;

Criado API para retornar uma frase aleatória da autora Clarice Linspector de acordo com o site Pensador, usando a lib pensador-api.

GET - /frases/clarice

Obtenha uma frase aleatória da autora Clarice Linspector

response:
```bash
{
"author": "Clarice Lispector",
"text": "Mas há a vida que é para ser intensamente vivida. Há o amor. Que tem que ser vivido até a última gota. Sem nenhum medo. Não mata."
}

```

## Como executar 

Clone esse projeto

```bash
$ git clone https://github.com/lumamontes/backend-leitor-de-frases.git
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn
# Iniciar o projeto
$ yarn dev
```
