"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const profile_gateway_1 = require("./profile.gateway");
const profile_service_1 = require("./profile.service");
describe('ProfileGateway', () => {
    let gateway;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [profile_gateway_1.ProfileGateway, profile_service_1.ProfileService],
        }).compile();
        gateway = module.get(profile_gateway_1.ProfileGateway);
    });
    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });
});
//# sourceMappingURL=profile.gateway.spec%202.js.map