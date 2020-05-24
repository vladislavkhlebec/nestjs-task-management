"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
const task_repository_1 = require("./task.repository");
const mockTaskRepository = () => ({
    getTasks: jest.fn()
});
describe('TaskService', () => {
    let tasksService;
    let taskRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                tasks_service_1.TasksService,
                { provide: task_repository_1.TaskRepository, useFactory: mockTaskRepository }
            ],
        }).compile();
        tasksService = await module.get(tasks_service_1.TasksService);
        taskRepository = await module.get(task_repository_1.TaskRepository);
    });
    describe('getTasks', () => {
        it('Gets all tasks from the repository', () => {
            expect(taskRepository.getTasks);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBR2xELE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUNuQixDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFlBQVksQ0FBQTtJQUNoQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosWUFBWSxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBZSw0QkFBWSxDQUFDLENBQUE7UUFDNUQsY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDekIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtZQUM3QyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBUYXNrc1NlcnZpY2UgfSBmcm9tICcuL3Rhc2tzLnNlcnZpY2UnXG5pbXBvcnQgeyBUYXNrUmVwb3NpdG9yeSB9IGZyb20gJy4vdGFzay5yZXBvc2l0b3J5J1xuaW1wb3J0IG1vY2sgPSBqZXN0Lm1vY2tcblxuY29uc3QgbW9ja1Rhc2tSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0Z2V0VGFza3M6IGplc3QuZm4oKVxufSlcblxuZGVzY3JpYmUoJ1Rhc2tTZXJ2aWNlJywgKCkgPT4ge1xuXHRsZXQgdGFza3NTZXJ2aWNlXG5cdGxldCB0YXNrUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VGFza3NTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IFRhc2tSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVGFza1JlcG9zaXRvcnkgfVxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHRhc2tzU2VydmljZSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFRhc2tzU2VydmljZT4oVGFza3NTZXJ2aWNlKVxuXHRcdHRhc2tSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxUYXNrUmVwb3NpdG9yeT4oVGFza1JlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tzJywgKCkgPT4ge1xuXHRcdGl0KCdHZXRzIGFsbCB0YXNrcyBmcm9tIHRoZSByZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKVxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==