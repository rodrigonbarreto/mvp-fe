# Users SPA

## Tecnologias utilizadas
- **HTML** e **JavaScript** simples.
- **TailwindCSS**: Para não precisar de instalaçǎo, usei o CDN.
  `<script src="https://cdn.tailwindcss.com"></script>`

---

## ✨ Funcionalidades
1. **Listar usuários**: Mostra uma lista de usuários.
2. **Detalhes do usuário**: Exibe mais informações sobre um usuário.
3. **Busca**: Permite filtrar usuários ao digitar no campo e pressionar "Enter".

---

## ⚙️ Como funciona?
- O projeto é baseado em eventos simples do navegador:
    - **`hashchange`**: Detecta mudanças na URL (por exemplo, de `#/` para `#user/1`) e atualiza o conteúdo.
    - **`load`**: Garante que a página carrega corretamente ao ser aberta.

- A lógica central usa:
    - **`listUsers`**: Busca e exibe todos os usuários.
    - **`showUser`**: Mostra os detalhes de um usuário específico.
    - **`router`**: Gerencia as mudanças na URL e atualiza o conteúdo com base na rota.
---

## 🚀 Como rodar o projeto?
1. Abra o arquivo `index.html` no navegador.
2. Certifique-se de que a API está rodando no endereço `http://127.0.0.1:5000/api`.
3. Explore as funcionalidades:
    - Veja a lista de usuários.
    - Pesquise usuários pelo nome.
    - Clique em "View Details" para ver os detalhes.

- **Repositório FE:** [https://github.com/rodrigonbarreto/mvp-fe](https://github.com/rodrigonbarreto/mvp-fe)
- **Repositório BE:** [https://github.com/rodrigonbarreto/mvp-be](https://github.com/rodrigonbarreto/mvp-be)