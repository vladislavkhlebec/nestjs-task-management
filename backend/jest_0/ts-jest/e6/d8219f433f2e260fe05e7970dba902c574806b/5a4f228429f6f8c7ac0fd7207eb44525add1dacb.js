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
        it('calls taskRepository.findOne() and successfully retrieve and return the task', () => {
        });
        it('throw an error as task is not found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbkIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ25DLHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDNUIsRUFBRSxDQUFDLDhFQUE4RSxFQUFFLEdBQUcsRUFBRTtRQUV4RixDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFFL0MsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvdGFza3MvdGFzay5zZXJ2aWNlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFRhc2tzU2VydmljZSB9IGZyb20gJy4vdGFza3Muc2VydmljZSdcbmltcG9ydCB7IFRhc2tSZXBvc2l0b3J5IH0gZnJvbSAnLi90YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBHZXRUYXNrc0ZpbHRlckR0byB9IGZyb20gJy4vZHRvL2dldC10YXNrcy1maWx0ZXIuZHRvJ1xuaW1wb3J0IHsgVGFza1N0YXR1cyB9IGZyb20gJy4vdGFzay1zdGF0dXMuZW51bSdcblxuY29uc3QgbW9ja1VzZXIgPSB7IHVzZXJuYW1lOiAnVGVzdCB1c2VyJyB9XG5cbmNvbnN0IG1vY2tUYXNrUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cdGdldFRhc2tzOiBqZXN0LmZuKClcbn0pXG5cbmRlc2NyaWJlKCdUYXNrU2VydmljZScsICgpID0+IHtcblx0bGV0IHRhc2tzU2VydmljZVxuXHRsZXQgdGFza1JlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFRhc2tzU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBUYXNrUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1Rhc2tSZXBvc2l0b3J5IH1cblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR0YXNrc1NlcnZpY2UgPSBhd2FpdCAgbW9kdWxlLmdldDxUYXNrc1NlcnZpY2U+KFRhc2tzU2VydmljZSlcblx0XHR0YXNrUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VGFza1JlcG9zaXRvcnk+KFRhc2tSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdnZXRUYXNrcycsICgpID0+IHtcblx0XHRpdCgnR2V0cyBhbGwgdGFza3MgZnJvbSB0aGUgcmVwb3NpdG9yeScsIGFzeW5jICgpID0+IHtcblx0XHRcdHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzLm1vY2tSZXNvbHZlZFZhbHVlKCdzb21lVmFsdWUnKVxuXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGNvbnN0IGZpbHRlcnM6IEdldFRhc2tzRmlsdGVyRHRvID0geyBzdGF0dXM6IFRhc2tTdGF0dXMuSU5fUFJPR1JFU1MsIHNlYXJjaDogJ1NvbWUgc2VhcmNoIHF1ZXJ5J31cblx0XHRcdC8vIENhbGwgdGFza3NTZXJ2aWNlLmdldFRhc2tzXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoZmlsdGVycywgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgnc29tZVZhbHVlJylcblx0XHRcdC8vIGV4cGVjdCB0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcyBUTyBIQVZFIEJFRU4gQ0FMTEVEXG5cdFx0fSlcblx0fSlcblxuXHRkZXNjcmliZSgnZ2V0VGFza0J5SWQnLCAoKSA9PiB7XG5cdFx0aXQoJ2NhbGxzIHRhc2tSZXBvc2l0b3J5LmZpbmRPbmUoKSBhbmQgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlIGFuZCByZXR1cm4gdGhlIHRhc2snLCAoKSA9PiB7XG5cblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93IGFuIGVycm9yIGFzIHRhc2sgaXMgbm90IGZvdW5kJywgKCkgPT4ge1xuXHRcdFx0XG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9