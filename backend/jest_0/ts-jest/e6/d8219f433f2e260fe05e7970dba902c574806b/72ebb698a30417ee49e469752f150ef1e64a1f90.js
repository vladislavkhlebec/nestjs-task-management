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
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getTasks(filterDto, user) {
        return this.taskRepository.getTasks(filterDto, user);
    }
    async getTaskById(id, user) {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id } });
        if (!found) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return found;
    }
    async createTask(createTaskDto, user) {
        return this.taskRepository.createTask(createTaskDto, user);
    }
    async deleteTask(id, user) {
        const result = await this.taskRepository.delete({ id, userId: user.id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
    }
    async updateTaskStatus(id, status, user) {
        const task = await this.getTaskById(id, user);
        task.status = status;
        await task.save();
        return task;
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_repository_1.TaskRepository)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrcy5zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThEO0FBQzlELHVEQUFrRDtBQUNsRCw2Q0FBa0Q7QUFRbEQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN4QixZQUVTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDO0lBRUosS0FBSyxDQUFDLFFBQVEsQ0FDYixTQUE0QixFQUM1QixJQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBVSxFQUFFLElBQVU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUVsRixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsTUFBTSxJQUFJLDBCQUFpQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQzNEO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUE0QixFQUFFLElBQVU7UUFDeEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQ2YsRUFBVSxFQUNWLElBQVU7UUFFVixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUV2RSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQTtTQUMzRDtJQUNGLENBQUM7SUFDRCxLQUFLLENBQUMsZ0JBQWdCLENBQ3JCLEVBQVUsRUFDVixNQUFrQixFQUNsQixJQUFVO1FBRVYsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUVqQixPQUFPLElBQUksQ0FBQTtJQUNaLENBQUM7Q0FDRCxDQUFBO0FBaERZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTtJQUdWLFdBQUEsMEJBQWdCLENBQUMsZ0NBQWMsQ0FBQyxDQUFBO3FDQUNULGdDQUFjO0dBSDNCLFlBQVksQ0FnRHhCO0FBaERZLG9DQUFZIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvdGFza3MvdGFza3Muc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOb3RGb3VuZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3Rhc2sucmVwb3NpdG9yeSdcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrLmVudGl0eSdcbmltcG9ydCB7IENyZWF0ZVRhc2tEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtdGFzay5kdG8nXG5pbXBvcnQgeyBUYXNrU3RhdHVzIH0gZnJvbSAnLi90YXNrLXN0YXR1cy5lbnVtJ1xuaW1wb3J0IHsgR2V0VGFza3NGaWx0ZXJEdG8gfSBmcm9tICcuL2R0by9nZXQtdGFza3MtZmlsdGVyLmR0bydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9hdXRoL3VzZXIuZW50aXR5J1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFza3NTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdFJlcG9zaXRvcnkoVGFza1JlcG9zaXRvcnkpXG5cdFx0cHJpdmF0ZSB0YXNrUmVwb3NpdG9yeTogVGFza1JlcG9zaXRvcnlcblx0KSB7fVxuXG5cdGFzeW5jIGdldFRhc2tzKFxuXHRcdGZpbHRlckR0bzogR2V0VGFza3NGaWx0ZXJEdG8sXG5cdFx0dXNlcjogVXNlclxuXHQpOiBQcm9taXNlPFRhc2tbXT4ge1xuXHRcdHJldHVybiB0aGlzLnRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKGZpbHRlckR0bywgdXNlcilcblx0fVxuXG5cdGFzeW5jIGdldFRhc2tCeUlkKGlkOiBudW1iZXIsIHVzZXI6IFVzZXIpOiBQcm9taXNlPFRhc2s+IHtcblx0XHRjb25zdCBmb3VuZCA9IGF3YWl0IHRoaXMudGFza1JlcG9zaXRvcnkuZmluZE9uZSh7IHdoZXJlOiB7IGlkLCB1c2VySWQ6IHVzZXIuaWQgfX0pXG5cblx0XHRpZiAoIWZvdW5kKSB7XG5cdFx0XHR0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oYFRhc2sgd2l0aCBJRCAke2lkfSBub3QgZm91bmRgKVxuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZFxuXHR9XG5cblx0YXN5bmMgY3JlYXRlVGFzayhjcmVhdGVUYXNrRHRvOiBDcmVhdGVUYXNrRHRvLCB1c2VyOiBVc2VyKTogUHJvbWlzZTxUYXNrPiB7XG5cdFx0cmV0dXJuIHRoaXMudGFza1JlcG9zaXRvcnkuY3JlYXRlVGFzayhjcmVhdGVUYXNrRHRvLCB1c2VyKVxuXHR9XG5cblx0YXN5bmMgZGVsZXRlVGFzayhcblx0XHRpZDogbnVtYmVyLFxuXHRcdHVzZXI6IFVzZXIsXG5cdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudGFza1JlcG9zaXRvcnkuZGVsZXRlKHsgaWQsIHVzZXJJZDogdXNlci5pZH0pXG5cblx0XHRpZiAocmVzdWx0LmFmZmVjdGVkID09PSAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oYFRhc2sgd2l0aCBJRCAke2lkfSBub3QgZm91bmRgKVxuXHRcdH1cblx0fVxuXHRhc3luYyB1cGRhdGVUYXNrU3RhdHVzKFxuXHRcdGlkOiBudW1iZXIsXG5cdFx0c3RhdHVzOiBUYXNrU3RhdHVzLFxuXHRcdHVzZXI6IFVzZXJcblx0KTogUHJvbWlzZTxUYXNrPiB7XG5cdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRoaXMuZ2V0VGFza0J5SWQoaWQsIHVzZXIpXG5cdFx0dGFzay5zdGF0dXMgPSBzdGF0dXNcblx0XHRhd2FpdCB0YXNrLnNhdmUoKVxuXG5cdFx0cmV0dXJuIHRhc2tcblx0fVxufVxuIl0sInZlcnNpb24iOjN9