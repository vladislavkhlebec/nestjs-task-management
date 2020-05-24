"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
const task_repository_1 = require("./task.repository");
const task_status_enum_1 = require("./task-status.enum");
const common_1 = require("@nestjs/common");
const mockUser = { username: 'Test user', id: 12 };
const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
    createTask: jest.fn(),
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
            expect(taskRepository.findOne).toHaveBeenCalledWith({ where: { id: 1, userId: mockUser.id } });
        });
        it('throw an error as task is not found', () => {
            taskRepository.findOne.mockResolvedValue(null);
            expect(tasksService.getTaskById(1, mockUser)).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('createTask', () => {
        it('calls taskRepository.create() and return the result', async () => {
            taskRepository.createTask.mockResolvedValue('success');
            expect(taskRepository.createTask).not.toHaveBeenCalled();
            const createTaskDto = { title: 'Hello world', description: 'We need save this world form you' };
            const result = await tasksService.createTask(createTaskDto, mockUser);
            expect(taskRepository.createTask).toHaveBeenCalledWith(createTaskDto);
            expect(result).toEqual('success');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUMvQywyQ0FBa0Q7QUFHbEQsTUFBTSxRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQTtBQUVsRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDckIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ25DLHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUU7UUFDM0IsRUFBRSxDQUFDLDhFQUE4RSxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdGLE1BQU0sUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUE7WUFDakUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUVsRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDOUYsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1lBQzlDLGNBQWMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBaUIsQ0FBQyxDQUFBO1FBQ2pGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtRQUMzQixFQUFFLENBQUMscURBQXFELEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDcEUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUV0RCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBRXhELE1BQU0sYUFBYSxHQUFrQixFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGtDQUFrQyxFQUFDLENBQUE7WUFDN0csTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUVyRSxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvdGFza3MvdGFzay5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFRhc2tzU2VydmljZSB9IGZyb20gJy4vdGFza3Muc2VydmljZSdcbmltcG9ydCB7IFRhc2tSZXBvc2l0b3J5IH0gZnJvbSAnLi90YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBHZXRUYXNrc0ZpbHRlckR0byB9IGZyb20gJy4vZHRvL2dldC10YXNrcy1maWx0ZXIuZHRvJ1xuaW1wb3J0IHsgVGFza1N0YXR1cyB9IGZyb20gJy4vdGFzay1zdGF0dXMuZW51bSdcbmltcG9ydCB7IE5vdEZvdW5kRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBDcmVhdGVUYXNrRHRvIH0gZnJvbSAnLi9kdG8vY3JlYXRlLXRhc2suZHRvJ1xuXG5jb25zdCBtb2NrVXNlciA9IHsgdXNlcm5hbWU6ICdUZXN0IHVzZXInLCBpZDogMTIgfVxuXG5jb25zdCBtb2NrVGFza1JlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRnZXRUYXNrczogamVzdC5mbigpLFxuXHRmaW5kT25lOiBqZXN0LmZuKCksXG5cdGNyZWF0ZVRhc2s6IGplc3QuZm4oKSxcbn0pXG5cbmRlc2NyaWJlKCdUYXNrU2VydmljZScsICgpID0+IHtcblx0bGV0IHRhc2tzU2VydmljZVxuXHRsZXQgdGFza1JlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFRhc2tzU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBUYXNrUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1Rhc2tSZXBvc2l0b3J5IH1cblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR0YXNrc1NlcnZpY2UgPSBhd2FpdCAgbW9kdWxlLmdldDxUYXNrc1NlcnZpY2U+KFRhc2tzU2VydmljZSlcblx0XHR0YXNrUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VGFza1JlcG9zaXRvcnk+KFRhc2tSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdnZXRUYXNrcycsICgpID0+IHtcblx0XHRpdCgnR2V0cyBhbGwgdGFza3MgZnJvbSB0aGUgcmVwb3NpdG9yeScsIGFzeW5jICgpID0+IHtcblx0XHRcdHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzLm1vY2tSZXNvbHZlZFZhbHVlKCdzb21lVmFsdWUnKVxuXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGNvbnN0IGZpbHRlcnM6IEdldFRhc2tzRmlsdGVyRHRvID0geyBzdGF0dXM6IFRhc2tTdGF0dXMuSU5fUFJPR1JFU1MsIHNlYXJjaDogJ1NvbWUgc2VhcmNoIHF1ZXJ5J31cblx0XHRcdC8vIENhbGwgdGFza3NTZXJ2aWNlLmdldFRhc2tzXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoZmlsdGVycywgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgnc29tZVZhbHVlJylcblx0XHRcdC8vIGV4cGVjdCB0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcyBUTyBIQVZFIEJFRU4gQ0FMTEVEXG5cdFx0fSlcblx0fSlcblxuXHRkZXNjcmliZSgnZ2V0VGFza0J5SWQnLCgpID0+IHtcblx0XHRpdCgnY2FsbHMgdGFza1JlcG9zaXRvcnkuZmluZE9uZSgpIGFuZCBzdWNjZXNzZnVsbHkgcmV0cmlldmUgYW5kIHJldHVybiB0aGUgdGFzaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IG1vY2tUYXNrID0geyB0aXRsZTogJ1Rlc3QgdGFzaycsIGRlc2NyaXB0aW9uOiAnVGVzdCBkZXNjJyB9XG5cdFx0XHR0YXNrUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKG1vY2tUYXNrKVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0YXNrc1NlcnZpY2UuZ2V0VGFza0J5SWQoMSwgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0VxdWFsKG1vY2tUYXNrKVxuXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZmluZE9uZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoeyB3aGVyZTogeyBpZDogMSwgdXNlcklkOiBtb2NrVXNlci5pZCB9fSlcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93IGFuIGVycm9yIGFzIHRhc2sgaXMgbm90IGZvdW5kJywgKCkgPT4ge1xuXHRcdFx0dGFza1JlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZShudWxsKVxuXHRcdFx0ZXhwZWN0KHRhc2tzU2VydmljZS5nZXRUYXNrQnlJZCgxLCBtb2NrVXNlcikpLnJlamVjdHMudG9UaHJvdyhOb3RGb3VuZEV4Y2VwdGlvbilcblx0XHR9KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdjcmVhdGVUYXNrJywgKCkgPT4ge1xuXHRcdGl0KCdjYWxscyB0YXNrUmVwb3NpdG9yeS5jcmVhdGUoKSBhbmQgcmV0dXJuIHRoZSByZXN1bHQnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0YXNrUmVwb3NpdG9yeS5jcmVhdGVUYXNrLm1vY2tSZXNvbHZlZFZhbHVlKCdzdWNjZXNzJylcblxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmNyZWF0ZVRhc2spLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblxuXHRcdFx0Y29uc3QgY3JlYXRlVGFza0R0bzogQ3JlYXRlVGFza0R0byA9IHsgdGl0bGU6ICdIZWxsbyB3b3JsZCcsIGRlc2NyaXB0aW9uOiAnV2UgbmVlZCBzYXZlIHRoaXMgd29ybGQgZm9ybSB5b3UnfVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGFza3NTZXJ2aWNlLmNyZWF0ZVRhc2soY3JlYXRlVGFza0R0bywgbW9ja1VzZXIpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5jcmVhdGVUYXNrKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChjcmVhdGVUYXNrRHRvKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgnc3VjY2VzcycpXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9