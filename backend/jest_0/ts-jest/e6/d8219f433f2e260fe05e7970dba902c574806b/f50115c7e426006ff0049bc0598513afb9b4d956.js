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
            expect(taskRepository.getTasks).toHaveBeenCalled();
            expect(result).toEqual('someValue');
            // expect taskRepository.getTasks TO HAVE BEEN CALLED
        });
    });
    describe('getTaskById', () => {
        it('calls taskRepository.findOne() and successfully retrieve and return the task', async () => {
            const mockTask = { title: 'Test task', description: 'Test desc' };
            taskRepository.findOne.mockResolvedValue(mockTask);
            const result = await tasksService.getTaskById(1, mockUser);
            expect(result).toEqual(mockTask);
            expect(taskRepository.findOne).toHaveBeenCalledWith();
        });
        it('throw an error as task is not found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ25DLHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUU7UUFDM0IsRUFBRSxDQUFDLDhFQUE4RSxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdGLE1BQU0sUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUE7WUFDakUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUVsRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQ3RELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtRQUUvQyxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVGFza3NTZXJ2aWNlIH0gZnJvbSAnLi90YXNrcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3Rhc2sucmVwb3NpdG9yeSdcbmltcG9ydCB7IEdldFRhc2tzRmlsdGVyRHRvIH0gZnJvbSAnLi9kdG8vZ2V0LXRhc2tzLWZpbHRlci5kdG8nXG5pbXBvcnQgeyBUYXNrU3RhdHVzIH0gZnJvbSAnLi90YXNrLXN0YXR1cy5lbnVtJ1xuXG5jb25zdCBtb2NrVXNlciA9IHsgdXNlcm5hbWU6ICdUZXN0IHVzZXInIH1cblxuY29uc3QgbW9ja1Rhc2tSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0Z2V0VGFza3M6IGplc3QuZm4oKSxcblx0ZmluZE9uZTogamVzdC5mbigpXG59KVxuXG5kZXNjcmliZSgnVGFza1NlcnZpY2UnLCAoKSA9PiB7XG5cdGxldCB0YXNrc1NlcnZpY2Vcblx0bGV0IHRhc2tSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRUYXNrc1NlcnZpY2UsXG5cdFx0XHRcdHsgcHJvdmlkZTogVGFza1JlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IG1vY2tUYXNrUmVwb3NpdG9yeSB9XG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dGFza3NTZXJ2aWNlID0gYXdhaXQgIG1vZHVsZS5nZXQ8VGFza3NTZXJ2aWNlPihUYXNrc1NlcnZpY2UpXG5cdFx0dGFza1JlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFRhc2tSZXBvc2l0b3J5PihUYXNrUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnZ2V0VGFza3MnLCAoKSA9PiB7XG5cdFx0aXQoJ0dldHMgYWxsIHRhc2tzIGZyb20gdGhlIHJlcG9zaXRvcnknLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcy5tb2NrUmVzb2x2ZWRWYWx1ZSgnc29tZVZhbHVlJylcblxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRjb25zdCBmaWx0ZXJzOiBHZXRUYXNrc0ZpbHRlckR0byA9IHsgc3RhdHVzOiBUYXNrU3RhdHVzLklOX1BST0dSRVNTLCBzZWFyY2g6ICdTb21lIHNlYXJjaCBxdWVyeSd9XG5cdFx0XHQvLyBDYWxsIHRhc2tzU2VydmljZS5nZXRUYXNrc1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGFza3NTZXJ2aWNlLmdldFRhc2tzKGZpbHRlcnMsIG1vY2tVc2VyKVxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKS50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoJ3NvbWVWYWx1ZScpXG5cdFx0XHQvLyBleHBlY3QgdGFza1JlcG9zaXRvcnkuZ2V0VGFza3MgVE8gSEFWRSBCRUVOIENBTExFRFxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tCeUlkJywoKSA9PiB7XG5cdFx0aXQoJ2NhbGxzIHRhc2tSZXBvc2l0b3J5LmZpbmRPbmUoKSBhbmQgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlIGFuZCByZXR1cm4gdGhlIHRhc2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBtb2NrVGFzayA9IHsgdGl0bGU6ICdUZXN0IHRhc2snLCBkZXNjcmlwdGlvbjogJ1Rlc3QgZGVzYycgfVxuXHRcdFx0dGFza1JlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZShtb2NrVGFzaylcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGFza3NTZXJ2aWNlLmdldFRhc2tCeUlkKDEsIG1vY2tVc2VyKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbChtb2NrVGFzaylcblxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmZpbmRPbmUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKClcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93IGFuIGVycm9yIGFzIHRhc2sgaXMgbm90IGZvdW5kJywgKCkgPT4ge1xuXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9