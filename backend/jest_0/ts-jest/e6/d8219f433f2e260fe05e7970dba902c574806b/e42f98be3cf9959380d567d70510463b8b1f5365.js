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
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./user.repository");
let JwtStategy = class JwtStategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.userRepository.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtStategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], JwtStategy);
exports.JwtStategy = JwtStategy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdGF0ZWd5LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQW1EO0FBQ25ELCtDQUFrRDtBQUNsRCwyQ0FBa0U7QUFFbEUsNkNBQWtEO0FBQ2xELHVEQUFrRDtBQUtsRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFXLFNBQVEsMkJBQWdCLENBQUMsdUJBQVEsQ0FBQztJQUN6RCxZQUVTLGNBQThCO1FBRXRDLEtBQUssQ0FBQztZQUNMLGNBQWMsRUFBRSx5QkFBVSxDQUFDLDJCQUEyQixFQUFFO1lBQ3hELFdBQVcsRUFBRSxhQUFhO1NBQzFCLENBQUMsQ0FBQTtRQUxNLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQU12QyxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFtQjtRQUNqQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFBO1FBQzVCLE1BQU0sSUFBSSxHQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTNELElBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksOEJBQXFCLEVBQUUsQ0FBQTtTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFBO0lBQ1osQ0FBQztDQUNELENBQUE7QUFyQlksVUFBVTtJQUR0QixtQkFBVSxFQUFFO0lBR1YsV0FBQSwwQkFBZ0IsQ0FBQyxnQ0FBYyxDQUFDLENBQUE7cUNBQ1QsZ0NBQWM7R0FIM0IsVUFBVSxDQXFCdEI7QUFyQlksZ0NBQVUiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdGF0ZWd5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0J1xuaW1wb3J0IHsgU3RyYXRlZ3ksIEV4dHJhY3RKd3R9IGZyb20gJ3Bhc3Nwb3J0LWp3dCdcbmltcG9ydCB7IEluamVjdGFibGUsIFVuYXV0aG9yaXplZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgSnd0UGF5bG9hZCB9IGZyb20gJy4vand0LXBheWxvYWQuaW50ZXJmYWNlJ1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSdcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSdcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0U3RhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3kpIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdFJlcG9zaXRvcnkoVXNlclJlcG9zaXRvcnkpXG5cdFx0cHJpdmF0ZSB1c2VyUmVwb3NpdG9yeTogVXNlclJlcG9zaXRvcnlcblx0KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0and0RnJvbVJlcXVlc3Q6IEV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCksXG5cdFx0XHRzZWNyZXRPcktleTogJ3RvcFNlY3JldDUxJyxcblx0XHR9KVxuXHR9XG5cblx0YXN5bmMgdmFsaWRhdGUocGF5bG9hZDogSnd0UGF5bG9hZCk6IFByb21pc2U8VXNlcj4ge1xuXHRcdGNvbnN0IHsgdXNlcm5hbWUgfSA9IHBheWxvYWRcblx0XHRjb25zdCB1c2VyID1hd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyB1c2VybmFtZSB9KVxuXG5cdFx0aWYoIXVzZXIpIHtcblx0XHRcdHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKVxuXHRcdH1cblxuXHRcdHJldHVybiB1c2VyXG5cdH1cbn0iXSwidmVyc2lvbiI6M30=