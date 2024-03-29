"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const user = await this.userModel.findOne({ username });
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(LoginDto) {
        const { email, password } = LoginDto;
        console.log(email, password);
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (user.password !== password) {
            throw new common_1.HttpException('invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = { username: user.username, sub: user._id };
        return {
            message: 'login successful',
            data: user,
        };
    }
    async register(RegisterDto) {
        console.log(RegisterDto);
        console.log(RegisterDto.username, RegisterDto.phone, RegisterDto.email, RegisterDto.password);
        const { username, role, phone, email, password } = RegisterDto;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.HttpException('user already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(RegisterDto);
        await createdUser.save();
        return {
            message: 'Registration successful',
            data: createdUser,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map