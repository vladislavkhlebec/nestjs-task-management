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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const task_entity_1 = require("../tasks/task.entity");
let User = class User extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.Task, task => task.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
User = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['username'])
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIuZW50aXR5LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQStGO0FBQy9GLG1DQUFrQztBQUNsQyxzREFBMkM7QUFJM0MsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG9CQUFVO0lBb0JuQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkQsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUM5QixDQUFDO0NBQ0QsQ0FBQTtBQXRCQTtJQURDLGdDQUFzQixFQUFFOztnQ0FDZjtBQUdWO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztzQ0FDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O2tDQUNHO0FBT1o7SUFMQyxtQkFBUyxDQUNULElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUksRUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2pCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUNmOzttQ0FDWTtBQWxCRCxJQUFJO0lBRmhCLGdCQUFNLEVBQUU7SUFDUixnQkFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7R0FDUixJQUFJLENBd0JoQjtBQXhCWSxvQkFBSSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvdXNlci5lbnRpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSwgQ29sdW1uLCBFbnRpdHksIE9uZVRvTWFueSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgVW5pcXVlIH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHRqcydcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi90YXNrcy90YXNrLmVudGl0eSdcblxuQEVudGl0eSgpXG5AVW5pcXVlKFsndXNlcm5hbWUnXSlcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cdEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcblx0aWQ6IG51bWJlclxuXG5cdEBDb2x1bW4oKVxuXHR1c2VybmFtZTogc3RyaW5nXG5cblx0QENvbHVtbigpXG5cdHBhc3N3b3JkOiBzdHJpbmdcblxuXHRAQ29sdW1uKClcblx0c2FsdDogc3RyaW5nXG5cblx0QE9uZVRvTWFueShcblx0XHR0eXBlID0+IFRhc2ssXG5cdFx0dGFzayA9PiB0YXNrLnVzZXIsXG5cdFx0eyBlYWdlcjogdHJ1ZSB9XG5cdClcblx0dGFza3M6IFRhc2tbXVxuXG5cdGFzeW5jIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgdGhpcy5zYWx0KVxuXHRcdHJldHVybiBoYXNoID09PSB0aGlzLnBhc3N3b3JkXG5cdH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==