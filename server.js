const express = require("express");

const motoristaRoutes = require("./routes/motoristaRoutes");
const coletaRoutes = require("./routes/coletaRoutes");

const app = express();

app.use(express.json());

// Rotas da aplicação
app.use("/motoristas", motoristaRoutes);
app.use("/coletas", coletaRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API LogiTech Express funcionando!"
    });
});

const PORT = 3000;

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}