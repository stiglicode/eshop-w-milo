require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const middlewares = require("./api/middleware/index");
const base_url = require("./utilities/base-url");

const productRoute = require("./api/routes/items/products.router");
const adminProfileRoute = require("./api/routes/auth/profiles.router");
const adminLogRoute = require("./api/routes/auth/logs.router");
const ordersRoute = require("./api/routes/order.router");
const shippingRoute = require("./api/routes/shipping.router");
const filamentsRoute = require("./api/routes/items/filaments.router");

const db = require("./db/connection");

const app = express();

const port = process.env.PORT || 2211;

//
// # -----------------------------------------------------------------
//

app.enable("trust proxy"); // needed for rate limiting by Client IP

app.use(morgan("common"));
app.use(helmet());
app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	})
);
app.use(express.json());

db.connect();

app.get("/", (req, res) => {
	res.json({
		message: "Product api v1",
	});
});

// # Routes
//
app.use(base_url("products"), productRoute);
app.use(base_url("auth"), adminProfileRoute);
app.use(base_url("auth"), adminLogRoute);
app.use(base_url("orders"), ordersRoute);
app.use(base_url("shipping"), shippingRoute);
app.use(base_url("filaments"), filamentsRoute);

app.use(middlewares.errors.notFound);
app.use(middlewares.errors.errorHandler);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
