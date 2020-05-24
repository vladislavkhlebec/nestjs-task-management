"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
const task_repository_1 = require("./task.repository");
const task_status_enum_1 = require("./task-status.enum");
const mockUser = { username: 'Test user' };
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
            taskRepository.getTasks.mockResolvedValue('someValue');
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            const filters = { status: task_status_enum_1.TaskStatus.IN_PROGRESS, search: 'Some search query' };
            // Call tasksService.getTasks
            tasksService.getTasks(filters, mockUser);
            expect(taskRepository.getTasks).toHaveBeenCalled();
            // expect taskRepository.getTasks TO HAVE BEEN CALLED
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbkIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7WUFDN0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUV0RCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQ3RELE1BQU0sT0FBTyxHQUFzQixFQUFFLE1BQU0sRUFBRSw2QkFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQTtZQUNqRyw2QkFBNkI7WUFDN0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQ2xELHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVGFza3NTZXJ2aWNlIH0gZnJvbSAnLi90YXNrcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3Rhc2sucmVwb3NpdG9yeSdcbmltcG9ydCB7IEdldFRhc2tzRmlsdGVyRHRvIH0gZnJvbSAnLi9kdG8vZ2V0LXRhc2tzLWZpbHRlci5kdG8nXG5pbXBvcnQgeyBUYXNrU3RhdHVzIH0gZnJvbSAnLi90YXNrLXN0YXR1cy5lbnVtJ1xuXG5jb25zdCBtb2NrVXNlciA9IHsgdXNlcm5hbWU6ICdUZXN0IHVzZXInIH1cblxuY29uc3QgbW9ja1Rhc2tSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0Z2V0VGFza3M6IGplc3QuZm4oKVxufSlcblxuZGVzY3JpYmUoJ1Rhc2tTZXJ2aWNlJywgKCkgPT4ge1xuXHRsZXQgdGFza3NTZXJ2aWNlXG5cdGxldCB0YXNrUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VGFza3NTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IFRhc2tSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVGFza1JlcG9zaXRvcnkgfVxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHRhc2tzU2VydmljZSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFRhc2tzU2VydmljZT4oVGFza3NTZXJ2aWNlKVxuXHRcdHRhc2tSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxUYXNrUmVwb3NpdG9yeT4oVGFza1JlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tzJywgKCkgPT4ge1xuXHRcdGl0KCdHZXRzIGFsbCB0YXNrcyBmcm9tIHRoZSByZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRcdFx0dGFza1JlcG9zaXRvcnkuZ2V0VGFza3MubW9ja1Jlc29sdmVkVmFsdWUoJ3NvbWVWYWx1ZScpXG5cblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgZmlsdGVyczogR2V0VGFza3NGaWx0ZXJEdG8gPSB7IHN0YXR1czogVGFza1N0YXR1cy5JTl9QUk9HUkVTUywgc2VhcmNoOiAnU29tZSBzZWFyY2ggcXVlcnknfVxuXHRcdFx0Ly8gQ2FsbCB0YXNrc1NlcnZpY2UuZ2V0VGFza3Ncblx0XHRcdHRhc2tzU2VydmljZS5nZXRUYXNrcyhmaWx0ZXJzLCBtb2NrVXNlcilcblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHQvLyBleHBlY3QgdGFza1JlcG9zaXRvcnkuZ2V0VGFza3MgVE8gSEFWRSBCRUVOIENBTExFRFxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==