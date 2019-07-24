# Mapa do Bairro

Projeto criado como parte do Nanodegree Web Front-End Avançado da Udacity. Aplicativo integra a API do Google Maps e do Foursquare, para mostrar um mapa com uma lista de locais selecionados. O aplicativo disponibiliza um campo para busca de algum local específico, dentro os locais disponíveis. O projeto foi desenvolvido com react.

### Instruções para baixar o projeto

1. Faça o clone deste projeto com `git clone https://github.com/sstihler/mapa-do-bairro.git`.

OU

1. Abra o navegador de sua preferência e acesse: `https://github.com/sstihler/mapa-do-bairro`;
2. Localize o botão `Clone or download` no canto superior direito da tela;
3. Clique no botão `Clone or download` e clique na opção `Download ZIP`;
4. Escolha a pasta onde deseja salvar o arquivo em seu computador e confirme;
5. Descompacte o arquivo em seu computador e siga os passos a seguir para visualizar o projeto.

### Instruções para visualizar o projeto

1. Acesse a pasta em que você descompactou o projeto no seu computador pelo terminal de comando.
2. Instale as dependências do projeto digitando `npm install`. Aguarde a conclusão da instalação.
3. Para inicializar o projeto digite `npm start` e aguarde. Uma nova janela do seu navegador, abrirá automaticamente exibindo o aplicativo. Caso isso não ocorra automaticamente, acesse o site no seu navegador em http://localhost:3000.

O projeto possui um service worker visível apenas em modo de produção.
Para executar o aplicativo no modo de produção, execute o comando abaixo na pasta local do projeto:

`npm run build`

Navegue até o diretorio `build` e execute o servidor localhost.
Se você tiver o Python 2.x instalado, poderá executar o Python Simple Server:

`python -m SimpleHTTPServer 8080`

Para o Python 3.x:

`python -m http.server 8080`

Em ambos os casos, acesse `http://localhost:8080` em seu navegador.

Você pode confirmar que o service worker está registrado através da guia Application do Dev Tools ou pela mensagem `No internet connection found. App is running in offline mode.` no console do navegador.

### Lista de dependências

1. HTML
2. CSS
3. JavaScript
4. React
