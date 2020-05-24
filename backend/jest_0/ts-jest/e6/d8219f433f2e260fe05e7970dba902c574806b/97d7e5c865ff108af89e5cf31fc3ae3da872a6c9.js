"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
const task_repository_1 = require("./task.repository");
const task_status_enum_1 = require("./task-status.enum");
const mockUser = { username: 'Test user' };
const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn()
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
        it('Gets all tasks from the repository', async () => {
            taskRepository.getTasks.mockResolvedValue('someValue');
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            const filters = { status: task_status_enum_1.TaskStatus.IN_PROGRESS, search: 'Some search query' };
            // Call tasksService.getTasks
            const result = await tasksService.getTasks(filters, mockUser);
            // expect(taskRepository.getTasks).toHaveBeenCalled()
            expect(result).toEqual('someValue');
            // expect taskRepository.getTasks TO HAVE BEEN CALLED
        });
    });
    describe('getTaskById', () => {
        it('calls taskRepository.findOne() and successfully retrieve and return the task', () => {
        });
        it('throw an error as task is not found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdELHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ25DLHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDNUIsRUFBRSxDQUFDLDhFQUE4RSxFQUFFLEdBQUcsRUFBRTtRQUV4RixDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFFL0MsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvdGFza3MvdGFzay5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFRhc2tzU2VydmljZSB9IGZyb20gJy4vdGFza3Muc2VydmljZSdcbmltcG9ydCB7IFRhc2tSZXBvc2l0b3J5IH0gZnJvbSAnLi90YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBHZXRUYXNrc0ZpbHRlckR0byB9IGZyb20gJy4vZHRvL2dldC10YXNrcy1maWx0ZXIuZHRvJ1xuaW1wb3J0IHsgVGFza1N0YXR1cyB9IGZyb20gJy4vdGFzay1zdGF0dXMuZW51bSdcblxuY29uc3QgbW9ja1VzZXIgPSB7IHVzZXJuYW1lOiAnVGVzdCB1c2VyJyB9XG5cbmNvbnN0IG1vY2tUYXNrUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cdGdldFRhc2tzOiBqZXN0LmZuKCksXG5cdGZpbmRPbmU6IGplc3QuZm4oKVxufSlcblxuZGVzY3JpYmUoJ1Rhc2tTZXJ2aWNlJywgKCkgPT4ge1xuXHRsZXQgdGFza3NTZXJ2aWNlXG5cdGxldCB0YXNrUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VGFza3NTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IFRhc2tSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVGFza1JlcG9zaXRvcnkgfVxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHRhc2tzU2VydmljZSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFRhc2tzU2VydmljZT4oVGFza3NTZXJ2aWNlKVxuXHRcdHRhc2tSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxUYXNrUmVwb3NpdG9yeT4oVGFza1JlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tzJywgKCkgPT4ge1xuXHRcdGl0KCdHZXRzIGFsbCB0YXNrcyBmcm9tIHRoZSByZXBvc2l0b3J5JywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dGFza1JlcG9zaXRvcnkuZ2V0VGFza3MubW9ja1Jlc29sdmVkVmFsdWUoJ3NvbWVWYWx1ZScpXG5cblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgZmlsdGVyczogR2V0VGFza3NGaWx0ZXJEdG8gPSB7IHN0YXR1czogVGFza1N0YXR1cy5JTl9QUk9HUkVTUywgc2VhcmNoOiAnU29tZSBzZWFyY2ggcXVlcnknfVxuXHRcdFx0Ly8gQ2FsbCB0YXNrc1NlcnZpY2UuZ2V0VGFza3Ncblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRhc2tzU2VydmljZS5nZXRUYXNrcyhmaWx0ZXJzLCBtb2NrVXNlcilcblx0XHRcdC8vIGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0VxdWFsKCdzb21lVmFsdWUnKVxuXHRcdFx0Ly8gZXhwZWN0IHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzIFRPIEhBVkUgQkVFTiBDQUxMRURcblx0XHR9KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdnZXRUYXNrQnlJZCcsICgpID0+IHtcblx0XHRpdCgnY2FsbHMgdGFza1JlcG9zaXRvcnkuZmluZE9uZSgpIGFuZCBzdWNjZXNzZnVsbHkgcmV0cmlldmUgYW5kIHJldHVybiB0aGUgdGFzaycsICgpID0+IHtcblxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3cgYW4gZXJyb3IgYXMgdGFzayBpcyBub3QgZm91bmQnLCAoKSA9PiB7XG5cblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=