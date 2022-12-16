"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    admin.initializeApp({
        credential: admin.credential.cert({
            private_key: process.env.FIREBASE_PRIVATE_KEY,
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            project_id: process.env.FIREBASE_PROJECT_ID
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(3333);
}
exports.default = admin;
bootstrap();
//# sourceMappingURL=main.js.map