"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const main_1 = require("../main");
let ProfileService = class ProfileService {
    async create(userProfile, role) {
        return await main_1.default
            .firestore()
            .collection(role + 'Profile')
            .doc(userProfile.uid)
            .set(userProfile);
    }
    async findAll(role) {
        const collection = await main_1.default
            .firestore()
            .collection(role + 'Profile')
            .get();
        return collection.docs.map((doc) => doc.data());
    }
    async findOne(uid, role) {
        const doc = await main_1.default
            .firestore()
            .collection(role + 'Profile')
            .doc(uid)
            .get();
        return doc.data();
    }
    async remove(uid, role) {
        return await main_1.default
            .firestore()
            .collection(role + 'Profile')
            .doc(uid)
            .delete();
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)()
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map