"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const profile_resolver_1 = require("./profile.resolver");
const profile_service_1 = require("./profile.service");
describe('ProfileResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [profile_resolver_1.ProfileResolver, profile_service_1.ProfileService],
        }).compile();
        resolver = module.get(profile_resolver_1.ProfileResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=profile.resolver.spec%202.js.map