"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const user_entity_1 = require("./user.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = this.create();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        try {
            await user.save();
        }
        catch (e) {
            if (e.code === '23505') {
                //dublicate username
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async validateUserPassword(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });
        if (user && (await user.validatePassword(password))) {
            return user.username;
        }
        else {
            return null;
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFDQUFzRDtBQUN0RCwyQ0FBZ0Y7QUFDaEYsbUNBQWtDO0FBQ2xDLCtDQUFvQztBQUlwQyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFlLFNBQVEsb0JBQWdCO0lBQ25ELEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQXNDO1FBQ2xELE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsa0JBQWtCLENBQUE7UUFFakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU1RCxJQUFJO1lBQ0gsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDakI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3ZCLG9CQUFvQjtnQkFDcEIsTUFBTSxJQUFJLDBCQUFpQixDQUFDLHlCQUF5QixDQUFDLENBQUE7YUFDdEQ7aUJBQU07Z0JBQ04sTUFBTSxJQUFJLHFDQUE0QixFQUFFLENBQUE7YUFDeEM7U0FDRDtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsa0JBQXNDO1FBQ2hFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsa0JBQWtCLENBQUE7UUFDakQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUU3QyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1NBQ3BCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQTtTQUNYO0lBQ0YsQ0FBQztJQUVPLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBZ0IsRUFBRSxJQUFZO1FBQ3hELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUNELENBQUE7QUFuQ1ksY0FBYztJQUQxQiwwQkFBZ0IsQ0FBQyxrQkFBSSxDQUFDO0dBQ1YsY0FBYyxDQW1DMUI7QUFuQ1ksd0NBQWMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCB7IENvbmZsaWN0RXhjZXB0aW9uLCBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSdcbmltcG9ydCB7IEF1dGhDcmVkZW50aWFsc0R0byB9IGZyb20gJy4vZHRvL2F1dGgtY3JlZGVudGlhbHMuZHRvJ1xuXG5ARW50aXR5UmVwb3NpdG9yeShVc2VyKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgUmVwb3NpdG9yeTxVc2VyPiB7XG5cdGFzeW5jIHNpZ25VcChhdXRoQ3JlZGVudGlhbHNEdG86IEF1dGhDcmVkZW50aWFsc0R0byk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBhdXRoQ3JlZGVudGlhbHNEdG9cblxuXHRcdGNvbnN0IHVzZXIgPSB0aGlzLmNyZWF0ZSgpXG5cdFx0dXNlci51c2VybmFtZSA9IHVzZXJuYW1lXG5cdFx0dXNlci5zYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoKVxuXHRcdHVzZXIucGFzc3dvcmQgPSBhd2FpdCB0aGlzLmhhc2hQYXNzd29yZChwYXNzd29yZCwgdXNlci5zYWx0KVxuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHVzZXIuc2F2ZSgpXG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aWYgKGUuY29kZSA9PT0gJzIzNTA1Jykge1xuXHRcdFx0XHQvL2R1YmxpY2F0ZSB1c2VybmFtZVxuXHRcdFx0XHR0aHJvdyBuZXcgQ29uZmxpY3RFeGNlcHRpb24oJ1VzZXJuYW1lIGFscmVhZHkgZXhpc3RzJylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKClcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhc3luYyB2YWxpZGF0ZVVzZXJQYXNzd29yZChhdXRoQ3JlZGVudGlhbHNEdG86IEF1dGhDcmVkZW50aWFsc0R0byk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGF1dGhDcmVkZW50aWFsc0R0b1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmZpbmRPbmUoeyB1c2VybmFtZSB9KVxuXG5cdFx0aWYgKHVzZXIgJiYgKGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpKSB7XG5cdFx0XHRyZXR1cm4gdXNlci51c2VybmFtZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgaGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIHNhbHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KVxuXHR9XG59XG4iXSwidmVyc2lvbiI6M30=