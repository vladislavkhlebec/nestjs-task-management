"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const task_status_enum_1 = require("./task-status.enum");
const common_1 = require("@nestjs/common");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('TaskRepository');
    }
    async getTasks(filterDto, user) {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        query.where('task.userId = :userId', { userId: user.id });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }
        try {
            const tasks = await query.getMany();
            return tasks;
        }
        catch (e) {
            this.logger.error(`Failed to get tasks for user "${user.username}, Filters: ${JSON.stringify(filterDto)}`, e.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = new task_entity_1.Task();
        task.title = title;
        task.description = description;
        task.status = task_status_enum_1.TaskStatus.OPEN;
        task.user = user;
        await task.save();
        delete task.user;
        return task;
    }
};
TaskRepository = __decorate([
    typeorm_1.EntityRepository(task_entity_1.Task)
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnJlcG9zaXRvcnkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBc0Q7QUFDdEQsK0NBQW9DO0FBRXBDLHlEQUErQztBQUcvQywyQ0FBb0U7QUFHcEUsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLG9CQUFnQjtJQUFwRDs7UUFDUyxXQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQXlDOUMsQ0FBQztJQXhDQSxLQUFLLENBQUMsUUFBUSxDQUNiLFNBQTRCLEVBQzVCLElBQVU7UUFFVixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQTtRQUVwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtRQUV4RCxJQUFJLE1BQU0sRUFBRTtZQUNYLEtBQUssQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ25EO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLDREQUE0RCxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZHO1FBQ0QsSUFBSTtZQUNILE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ25DLE9BQU8sS0FBSyxDQUFBO1NBQ1o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxJQUFJLENBQUMsUUFBUSxjQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkgsTUFBTSxJQUFJLHFDQUE0QixFQUFFLENBQUE7U0FDeEM7SUFDRixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUE0QixFQUFFLElBQVU7UUFDeEQsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxhQUFhLENBQUE7UUFFNUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBVSxDQUFDLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7UUFFaEIsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDO0NBQ0QsQ0FBQTtBQTFDWSxjQUFjO0lBRDFCLDBCQUFnQixDQUFDLGtCQUFJLENBQUM7R0FDVixjQUFjLENBMEMxQjtBQTFDWSx3Q0FBYyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2sucmVwb3NpdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5LCBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2suZW50aXR5J1xuaW1wb3J0IHsgQ3JlYXRlVGFza0R0byB9IGZyb20gJy4vZHRvL2NyZWF0ZS10YXNrLmR0bydcbmltcG9ydCB7IFRhc2tTdGF0dXMgfSBmcm9tICcuL3Rhc2stc3RhdHVzLmVudW0nXG5pbXBvcnQgeyBHZXRUYXNrc0ZpbHRlckR0byB9IGZyb20gJy4vZHRvL2dldC10YXNrcy1maWx0ZXIuZHRvJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2F1dGgvdXNlci5lbnRpdHknXG5pbXBvcnQge0ludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24sIExvZ2dlcn0gZnJvbSBcIkBuZXN0anMvY29tbW9uXCI7XG5cbkBFbnRpdHlSZXBvc2l0b3J5KFRhc2spXG5leHBvcnQgY2xhc3MgVGFza1JlcG9zaXRvcnkgZXh0ZW5kcyBSZXBvc2l0b3J5PFRhc2s+IHtcblx0cHJpdmF0ZSBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdUYXNrUmVwb3NpdG9yeScpXG5cdGFzeW5jIGdldFRhc2tzKFxuXHRcdGZpbHRlckR0bzogR2V0VGFza3NGaWx0ZXJEdG8sXG5cdFx0dXNlcjogVXNlclxuXHQpOiBQcm9taXNlPFRhc2tbXT4ge1xuXHRcdGNvbnN0IHsgc3RhdHVzLCBzZWFyY2ggfSA9IGZpbHRlckR0b1xuXG5cdFx0Y29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5QnVpbGRlcigndGFzaycpXG5cblx0XHRxdWVyeS53aGVyZSgndGFzay51c2VySWQgPSA6dXNlcklkJywgeyB1c2VySWQ6IHVzZXIuaWR9KVxuXG5cdFx0aWYgKHN0YXR1cykge1xuXHRcdFx0cXVlcnkuYW5kV2hlcmUoJ3Rhc2suc3RhdHVzID0gOnN0YXR1cycsIHsgc3RhdHVzIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHNlYXJjaCkge1xuXHRcdFx0cXVlcnkuYW5kV2hlcmUoJyh0YXNrLnRpdGxlIExJS0UgOnNlYXJjaCBPUiB0YXNrLmRlc2NyaXB0aW9uIExJS0UgOnNlYXJjaCknLCB7IHNlYXJjaDogYCUke3NlYXJjaH0lYCB9KVxuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdGFza3MgPSBhd2FpdCBxdWVyeS5nZXRNYW55KClcblx0XHRcdHJldHVybiB0YXNrc1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHRoaXMubG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhc2tzIGZvciB1c2VyIFwiJHt1c2VyLnVzZXJuYW1lfSwgRmlsdGVyczogJHtKU09OLnN0cmluZ2lmeShmaWx0ZXJEdG8pfWAsIGUuc3RhY2spXG5cdFx0XHR0aHJvdyBuZXcgSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbigpXG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgY3JlYXRlVGFzayhjcmVhdGVUYXNrRHRvOiBDcmVhdGVUYXNrRHRvLCB1c2VyOiBVc2VyKSB7XG5cdFx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGNyZWF0ZVRhc2tEdG9cblxuXHRcdGNvbnN0IHRhc2sgPSBuZXcgVGFzaygpXG5cdFx0dGFzay50aXRsZSA9IHRpdGxlXG5cdFx0dGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG5cdFx0dGFzay5zdGF0dXMgPSBUYXNrU3RhdHVzLk9QRU5cblx0XHR0YXNrLnVzZXIgPSB1c2VyXG5cdFx0YXdhaXQgdGFzay5zYXZlKClcblxuXHRcdGRlbGV0ZSB0YXNrLnVzZXJcblxuXHRcdHJldHVybiB0YXNrXG5cdH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==