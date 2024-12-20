import { MercadoPagoConfig, Preference } from "mercadopago";
import express from "express";
import cors from "cors";

const client = new MercadoPagoConfig({
    accessToken: "TEST-158667719404967-072319-72e0ecf5f48c118a19cefe9bfa39ae51-533521712",
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Soy el server:)");
});

app.post("/api/mercadopago/create_preference", async (req, res) => {
    try {
        const items = req.body.items.map(item => ({
            title: item.title,
            quantity: Number(item.quantity),
            unit_price: Number(item.price),
            currency_id: "ARS",
        }));

        const body = {
            items: items,
            back_urls: {
                success: "http://localhost:3000/admin/products",
                failure: "http://localhost:3000/admin/products",
                pending: "http://localhost:3000/admin/products"
            },
            auto_return: "approved",
        };

        // Imprimir el cuerpo de la solicitud para verificación
        console.log("Creando preferencia con el cuerpo:", body);

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({
            id: result.id,
        });

    } catch (error) {
        console.error("Error al crear la preferencia:", error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
            details: error.response ? error.response.data : 'No additional details available'
        });
    }
});

app.listen(port, () => {
    console.log('El servidor esta corriendo en el puerto: ' + port);
});
