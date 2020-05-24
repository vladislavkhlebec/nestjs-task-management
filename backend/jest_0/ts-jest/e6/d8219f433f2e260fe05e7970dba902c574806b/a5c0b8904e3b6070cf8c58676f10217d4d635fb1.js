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
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            // Call tasksService.getTasks
            // expect taskRepository.getTasks TO HAVE BEEN CALLED
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBR2xELE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUNuQixDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFlBQVksQ0FBQTtJQUNoQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosWUFBWSxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBZSw0QkFBWSxDQUFDLENBQUE7UUFDNUQsY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDekIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtZQUM3QyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBRXRELDZCQUE2QjtZQUU3QixxREFBcUQ7UUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvdGFza3MvdGFzay5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFRhc2tzU2VydmljZSB9IGZyb20gJy4vdGFza3Muc2VydmljZSdcbmltcG9ydCB7IFRhc2tSZXBvc2l0b3J5IH0gZnJvbSAnLi90YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgbW9jayA9IGplc3QubW9ja1xuXG5jb25zdCBtb2NrVGFza1JlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRnZXRUYXNrczogamVzdC5mbigpXG59KVxuXG5kZXNjcmliZSgnVGFza1NlcnZpY2UnLCAoKSA9PiB7XG5cdGxldCB0YXNrc1NlcnZpY2Vcblx0bGV0IHRhc2tSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRUYXNrc1NlcnZpY2UsXG5cdFx0XHRcdHsgcHJvdmlkZTogVGFza1JlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IG1vY2tUYXNrUmVwb3NpdG9yeSB9XG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dGFza3NTZXJ2aWNlID0gYXdhaXQgIG1vZHVsZS5nZXQ8VGFza3NTZXJ2aWNlPihUYXNrc1NlcnZpY2UpXG5cdFx0dGFza1JlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFRhc2tSZXBvc2l0b3J5PihUYXNrUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnZ2V0VGFza3MnLCAoKSA9PiB7XG5cdFx0aXQoJ0dldHMgYWxsIHRhc2tzIGZyb20gdGhlIHJlcG9zaXRvcnknLCAoKSA9PiB7XG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblxuXHRcdFx0Ly8gQ2FsbCB0YXNrc1NlcnZpY2UuZ2V0VGFza3Ncblx0XHRcdFxuXHRcdFx0Ly8gZXhwZWN0IHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzIFRPIEhBVkUgQkVFTiBDQUxMRURcblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=