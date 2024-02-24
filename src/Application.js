const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const apiRoutes = require('./routes/index');
const { sequelize } = require('./models');
const { ErrorLogger, InfoLogger } = require('./utils/logger');

const PORT = process.env.PORT || 8000

class Application {

    constructor(){
        this.app = express();
    }

    #useMiddlewares(){
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use('/api', apiRoutes);
    }

    async #sync(){
        await sequelize.sync({ alter: true });
        InfoLogger.warn("All models were synchronized successfully.");
    }

    async #manual(){
        ErrorLogger.info("Info Log...");
        ErrorLogger.warn("warn Log...");
        ErrorLogger.debug("debug Log...");
        ErrorLogger.error("error Log...");
    }

    #init(){
        this.app.listen(PORT, () => {
            InfoLogger.info(`EXPRESS Server started on PORT: ${PORT}`);
        });
    }

    async main(){
        this.#useMiddlewares();
        this.#init();
        // this.#sync();
        // this.#manual();
    }
}

module.exports = Application;