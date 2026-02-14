#  Rocket Logistics - API 

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

API REST desenvolvida com **Node.js** e **Express** para gerenciamento de envios (shipments).

Este projeto foi criado com foco em aprendizado de backend, aplicando boas práticas de arquitetura, organização em camadas e tratamento profissional de erros.

---

#  Sobre o Projeto

A Rocket Shipments API permite:

- Criar envios
- Listar envios
- Buscar envio por ID
- Atualizar envio
- Remover envio

A aplicação segue o padrão **MVC (Model-View-Controller)**, com separação clara de responsabilidades.

---

# 🛠 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript (ES6+)
- Insomnia / Postman (testes de requisição)

---

#  Arquitetura

```
src/
│
├── controllers/
│   └── shipmentController.js
│
├── models/
│   └── shipmentModel.js
│
├── routes/
│   └── shipmentRoutes.js
│
├── middlewares/
│   └── errorHandler.js
│
server.js
```

### 📌 Padrão Utilizado

```
Request → Route → Controller → Model → Response
                         ↓
                   Error Middleware
```

---

# ▶️ Como Executar o Projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/rocket-shipments-api.git
```

## 2️⃣ Instale as dependências

```bash
npm install
```

## 3️⃣ Execute o servidor

```bash
node server.js
```

ou

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

#  Endpoints da API

| Método | Rota                | Descrição                     |
|--------|---------------------|--------------------------------|
| GET    | /shipments          | Lista todos os envios         |
| GET    | /shipments/:id      | Busca envio por ID            |
| POST   | /shipments          | Cria um novo envio            |
| PUT    | /shipments/:id      | Atualiza um envio             |
| DELETE | /shipments/:id      | Remove um envio               |

---

#  Exemplo de Requisição

## Criar um Shipment

### Request

```http
POST /shipments
Content-Type: application/json
```

```json
{
  "weight": 100,
  "status": "pending"
}
```

### Response

```json
{
  "id": 1,
  "weight": 100,
  "status": "pending"
}
```

Status: `201 Created`

---

#  Tratamento de Erros

A API possui middleware global para tratamento de erros.

Formato padrão:

```json
{
  "error": "Mensagem do erro"
}
```

### Exemplos:

- 400 → Dados inválidos
- 404 → Shipment não encontrado
- 500 → Erro interno do servidor

---

#  Testando a API com Fetch

```javascript
fetch("http://localhost:3000/shipments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    weight: 150,
    status: "pending"
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

# Conceitos Aplicados

- REST API
- CRUD
- Arquitetura MVC
- Middleware
- Tratamento centralizado de erros
- Estrutura modular
- Organização escalável

---

#  Status do Projeto

✔ CRUD completo  
✔ Middleware de erro  
✔ Estrutura MVC  
✔ Organização modular  
❌ Persistência em banco de dados (dados em memória)

---

#  Melhorias Futuras

- Integração com banco de dados (PostgreSQL)
- Autenticação JWT
- Validação com biblioteca externa
- Versionamento de API (v1)
- Deploy em ambiente cloud

---

# 📄 Licença

Este projeto está sob a licença MIT.

---

# Autor

**Kelvis Xakriabá**  
Desenvolvedor Full Stack 
Projeto desenvolvido para a missão 2 do CodeLab.
Programadores do amanhã
