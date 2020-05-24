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
        it('calls taskRepository.findOne() and succe');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbkIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ25DLHFEQUFxRDtRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDNUIsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBUYXNrc1NlcnZpY2UgfSBmcm9tICcuL3Rhc2tzLnNlcnZpY2UnXG5pbXBvcnQgeyBUYXNrUmVwb3NpdG9yeSB9IGZyb20gJy4vdGFzay5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgR2V0VGFza3NGaWx0ZXJEdG8gfSBmcm9tICcuL2R0by9nZXQtdGFza3MtZmlsdGVyLmR0bydcbmltcG9ydCB7IFRhc2tTdGF0dXMgfSBmcm9tICcuL3Rhc2stc3RhdHVzLmVudW0nXG5cbmNvbnN0IG1vY2tVc2VyID0geyB1c2VybmFtZTogJ1Rlc3QgdXNlcicgfVxuXG5jb25zdCBtb2NrVGFza1JlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRnZXRUYXNrczogamVzdC5mbigpXG59KVxuXG5kZXNjcmliZSgnVGFza1NlcnZpY2UnLCAoKSA9PiB7XG5cdGxldCB0YXNrc1NlcnZpY2Vcblx0bGV0IHRhc2tSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRUYXNrc1NlcnZpY2UsXG5cdFx0XHRcdHsgcHJvdmlkZTogVGFza1JlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IG1vY2tUYXNrUmVwb3NpdG9yeSB9XG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dGFza3NTZXJ2aWNlID0gYXdhaXQgIG1vZHVsZS5nZXQ8VGFza3NTZXJ2aWNlPihUYXNrc1NlcnZpY2UpXG5cdFx0dGFza1JlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFRhc2tSZXBvc2l0b3J5PihUYXNrUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnZ2V0VGFza3MnLCAoKSA9PiB7XG5cdFx0aXQoJ0dldHMgYWxsIHRhc2tzIGZyb20gdGhlIHJlcG9zaXRvcnknLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcy5tb2NrUmVzb2x2ZWRWYWx1ZSgnc29tZVZhbHVlJylcblxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRjb25zdCBmaWx0ZXJzOiBHZXRUYXNrc0ZpbHRlckR0byA9IHsgc3RhdHVzOiBUYXNrU3RhdHVzLklOX1BST0dSRVNTLCBzZWFyY2g6ICdTb21lIHNlYXJjaCBxdWVyeSd9XG5cdFx0XHQvLyBDYWxsIHRhc2tzU2VydmljZS5nZXRUYXNrc1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGFza3NTZXJ2aWNlLmdldFRhc2tzKGZpbHRlcnMsIG1vY2tVc2VyKVxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKS50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoJ3NvbWVWYWx1ZScpXG5cdFx0XHQvLyBleHBlY3QgdGFza1JlcG9zaXRvcnkuZ2V0VGFza3MgVE8gSEFWRSBCRUVOIENBTExFRFxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tCeUlkJywgKCkgPT4ge1xuXHRcdGl0KCdjYWxscyB0YXNrUmVwb3NpdG9yeS5maW5kT25lKCkgYW5kIHN1Y2NlJylcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9