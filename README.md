# Proxy genérico para serviços internos.

A ideia é construir um proxy utilizando nodejs, o qual deve rotear os request para outros serviços (app1, app2), seguindo a seguinte regra de negócio:

- http://localhost:9000/app1 -> http://localhost:9001
- http://localhost:9000/app2 -> http://localhost:9002

A ideia é que no futuro tenhamos muitos serviços, e este proxy servirá como gateway. Lembre de redirecionar todos os componentes do request (headers, body, query, path, etc).

## Objetivos

- Código simples, sem tantas lihas de código.
- Utilizar librarías para construir o proxy.
- Código bem indentado.
- Utilize git para subir o código final.
## Opcionais 

* Dockerizar o projeto (Dockerfile, docker-compose).
* Testes unitários.
* Criar github actions para rodar testes unitários. 

# Estructura do projeto

Na pasta `src` você encontrará o arquivo `index.js` que contem o código do proxy, no qual você deverá escrever seu código.

Nas pastas `app1` e `app2` encontram-se os dois serviços que devem receber o trafego do proxy, escutando nas portas `9001` e `9002`,

Para iniciar o projeto pode utilizar o seguinte comando:

`node index.js` - inicia o proxy

`node src/app1/index.js` - inicia o app1

`node src/app2/index.js` - inicia o app2

Lembre de iniciar todos os serviços.

Bom trabalho!
