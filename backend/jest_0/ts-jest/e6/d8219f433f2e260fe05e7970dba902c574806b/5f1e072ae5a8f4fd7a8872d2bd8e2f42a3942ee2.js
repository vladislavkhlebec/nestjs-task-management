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
        // if (result.affected === 0) {
        throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrcy5zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThEO0FBQzlELHVEQUFrRDtBQUNsRCw2Q0FBa0Q7QUFRbEQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN4QixZQUVTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDO0lBRUosS0FBSyxDQUFDLFFBQVEsQ0FDYixTQUE0QixFQUM1QixJQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBVSxFQUFFLElBQVU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUVsRixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsTUFBTSxJQUFJLDBCQUFpQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQzNEO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUE0QixFQUFFLElBQVU7UUFDeEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQ2YsRUFBVSxFQUNWLElBQVU7UUFFVixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUV2RSwrQkFBK0I7UUFDOUIsTUFBTSxJQUFJLDBCQUFpQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQzVELElBQUk7SUFDTCxDQUFDO0lBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUNyQixFQUFVLEVBQ1YsTUFBa0IsRUFDbEIsSUFBVTtRQUVWLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFakIsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDO0NBQ0QsQ0FBQTtBQWhEWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7SUFHVixXQUFBLDBCQUFnQixDQUFDLGdDQUFjLENBQUMsQ0FBQTtxQ0FDVCxnQ0FBYztHQUgzQixZQUFZLENBZ0R4QjtBQWhEWSxvQ0FBWSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2tzLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTm90Rm91bmRFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFRhc2tSZXBvc2l0b3J5IH0gZnJvbSAnLi90YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzay5lbnRpdHknXG5pbXBvcnQgeyBDcmVhdGVUYXNrRHRvIH0gZnJvbSAnLi9kdG8vY3JlYXRlLXRhc2suZHRvJ1xuaW1wb3J0IHsgVGFza1N0YXR1cyB9IGZyb20gJy4vdGFzay1zdGF0dXMuZW51bSdcbmltcG9ydCB7IEdldFRhc2tzRmlsdGVyRHRvIH0gZnJvbSAnLi9kdG8vZ2V0LXRhc2tzLWZpbHRlci5kdG8nXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vYXV0aC91c2VyLmVudGl0eSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhc2tzU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3RSZXBvc2l0b3J5KFRhc2tSZXBvc2l0b3J5KVxuXHRcdHByaXZhdGUgdGFza1JlcG9zaXRvcnk6IFRhc2tSZXBvc2l0b3J5XG5cdCkge31cblxuXHRhc3luYyBnZXRUYXNrcyhcblx0XHRmaWx0ZXJEdG86IEdldFRhc2tzRmlsdGVyRHRvLFxuXHRcdHVzZXI6IFVzZXJcblx0KTogUHJvbWlzZTxUYXNrW10+IHtcblx0XHRyZXR1cm4gdGhpcy50YXNrUmVwb3NpdG9yeS5nZXRUYXNrcyhmaWx0ZXJEdG8sIHVzZXIpXG5cdH1cblxuXHRhc3luYyBnZXRUYXNrQnlJZChpZDogbnVtYmVyLCB1c2VyOiBVc2VyKTogUHJvbWlzZTxUYXNrPiB7XG5cdFx0Y29uc3QgZm91bmQgPSBhd2FpdCB0aGlzLnRhc2tSZXBvc2l0b3J5LmZpbmRPbmUoeyB3aGVyZTogeyBpZCwgdXNlcklkOiB1c2VyLmlkIH19KVxuXG5cdFx0aWYgKCFmb3VuZCkge1xuXHRcdFx0dGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uKGBUYXNrIHdpdGggSUQgJHtpZH0gbm90IGZvdW5kYClcblx0XHR9XG5cblx0XHRyZXR1cm4gZm91bmRcblx0fVxuXG5cdGFzeW5jIGNyZWF0ZVRhc2soY3JlYXRlVGFza0R0bzogQ3JlYXRlVGFza0R0bywgdXNlcjogVXNlcik6IFByb21pc2U8VGFzaz4ge1xuXHRcdHJldHVybiB0aGlzLnRhc2tSZXBvc2l0b3J5LmNyZWF0ZVRhc2soY3JlYXRlVGFza0R0bywgdXNlcilcblx0fVxuXG5cdGFzeW5jIGRlbGV0ZVRhc2soXG5cdFx0aWQ6IG51bWJlcixcblx0XHR1c2VyOiBVc2VyLFxuXHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRhc2tSZXBvc2l0b3J5LmRlbGV0ZSh7IGlkLCB1c2VySWQ6IHVzZXIuaWR9KVxuXG5cdFx0Ly8gaWYgKHJlc3VsdC5hZmZlY3RlZCA9PT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uKGBUYXNrIHdpdGggSUQgJHtpZH0gbm90IGZvdW5kYClcblx0XHQvLyB9XG5cdH1cblx0YXN5bmMgdXBkYXRlVGFza1N0YXR1cyhcblx0XHRpZDogbnVtYmVyLFxuXHRcdHN0YXR1czogVGFza1N0YXR1cyxcblx0XHR1c2VyOiBVc2VyXG5cdCk6IFByb21pc2U8VGFzaz4ge1xuXHRcdGNvbnN0IHRhc2sgPSBhd2FpdCB0aGlzLmdldFRhc2tCeUlkKGlkLCB1c2VyKVxuXHRcdHRhc2suc3RhdHVzID0gc3RhdHVzXG5cdFx0YXdhaXQgdGFzay5zYXZlKClcblxuXHRcdHJldHVybiB0YXNrXG5cdH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==