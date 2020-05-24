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
        const user = new user_entity_1.User();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFDQUFzRDtBQUN0RCwyQ0FBZ0Y7QUFDaEYsbUNBQWtDO0FBQ2xDLCtDQUFvQztBQUlwQyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFlLFNBQVEsb0JBQWdCO0lBQ25ELEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQXNDO1FBQ2xELE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsa0JBQWtCLENBQUE7UUFFakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTVELElBQUk7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNqQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdkIsb0JBQW9CO2dCQUNwQixNQUFNLElBQUksMEJBQWlCLENBQUMseUJBQXlCLENBQUMsQ0FBQTthQUN0RDtpQkFBTTtnQkFDTixNQUFNLElBQUkscUNBQTRCLEVBQUUsQ0FBQTthQUN4QztTQUNEO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBc0M7UUFDaEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQTtRQUNqRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTdDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7U0FDcEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFBO1NBQ1g7SUFDRixDQUFDO0lBRU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFnQixFQUFFLElBQVk7UUFDeEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0NBQ0QsQ0FBQTtBQW5DWSxjQUFjO0lBRDFCLDBCQUFnQixDQUFDLGtCQUFJLENBQUM7R0FDVixjQUFjLENBbUMxQjtBQW5DWSx3Q0FBYyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvdXNlci5yZXBvc2l0b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnksIFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJ1xuaW1wb3J0IHsgQ29uZmxpY3RFeGNlcHRpb24sIEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHRqcydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuaW1wb3J0IHsgQXV0aENyZWRlbnRpYWxzRHRvIH0gZnJvbSAnLi9kdG8vYXV0aC1jcmVkZW50aWFscy5kdG8nXG5cbkBFbnRpdHlSZXBvc2l0b3J5KFVzZXIpXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBSZXBvc2l0b3J5PFVzZXI+IHtcblx0YXN5bmMgc2lnblVwKGF1dGhDcmVkZW50aWFsc0R0bzogQXV0aENyZWRlbnRpYWxzRHRvKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGF1dGhDcmVkZW50aWFsc0R0b1xuXG5cdFx0Y29uc3QgdXNlciA9IG5ldyBVc2VyKClcblx0XHR1c2VyLnVzZXJuYW1lID0gdXNlcm5hbWVcblx0XHR1c2VyLnNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgpXG5cdFx0dXNlci5wYXNzd29yZCA9IGF3YWl0IHRoaXMuaGFzaFBhc3N3b3JkKHBhc3N3b3JkLCB1c2VyLnNhbHQpXG5cblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdXNlci5zYXZlKClcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRpZiAoZS5jb2RlID09PSAnMjM1MDUnKSB7XG5cdFx0XHRcdC8vZHVibGljYXRlIHVzZXJuYW1lXG5cdFx0XHRcdHRocm93IG5ldyBDb25mbGljdEV4Y2VwdGlvbignVXNlcm5hbWUgYWxyZWFkeSBleGlzdHMnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24oKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHZhbGlkYXRlVXNlclBhc3N3b3JkKGF1dGhDcmVkZW50aWFsc0R0bzogQXV0aENyZWRlbnRpYWxzRHRvKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYXV0aENyZWRlbnRpYWxzRHRvXG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAodXNlciAmJiAoYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkpIHtcblx0XHRcdHJldHVybiB1c2VyLnVzZXJuYW1lXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgc2FsdDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpXG5cdH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==