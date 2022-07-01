"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv_1 = require("dotenv");
const app_module_1 = __importDefault(require("./app.module"));
(0, dotenv_1.config)();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const PORT = process.env.NEST_PORT;
        const app = yield core_1.NestFactory.create(app_module_1.default);
        app.setGlobalPrefix('api/v1');
        yield app.listen(PORT).then(() => {
            // eslint-disable-next-line
            console.log(`server start on port ${PORT}`);
        });
    });
}
bootstrap();
