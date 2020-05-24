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
            const result = await tasksService.getTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUUvQyxNQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQTtBQUUxQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRXRELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDdEQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsTUFBTSxFQUFFLDZCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBQyxDQUFBO1lBQ2pHLDZCQUE2QjtZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM1QyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNuQyxxREFBcUQ7UUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1FBQzVCLEVBQUUsQ0FBQyw4RUFBOEUsRUFBRSxHQUFHLEVBQUU7UUFFeEYsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1FBRS9DLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBUYXNrc1NlcnZpY2UgfSBmcm9tICcuL3Rhc2tzLnNlcnZpY2UnXG5pbXBvcnQgeyBUYXNrUmVwb3NpdG9yeSB9IGZyb20gJy4vdGFzay5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgR2V0VGFza3NGaWx0ZXJEdG8gfSBmcm9tICcuL2R0by9nZXQtdGFza3MtZmlsdGVyLmR0bydcbmltcG9ydCB7IFRhc2tTdGF0dXMgfSBmcm9tICcuL3Rhc2stc3RhdHVzLmVudW0nXG5cbmNvbnN0IG1vY2tVc2VyID0geyB1c2VybmFtZTogJ1Rlc3QgdXNlcicgfVxuXG5jb25zdCBtb2NrVGFza1JlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRnZXRUYXNrczogamVzdC5mbigpLFxuXHRmaW5kT25lOiBqZXN0LmZuKClcbn0pXG5cbmRlc2NyaWJlKCdUYXNrU2VydmljZScsICgpID0+IHtcblx0bGV0IHRhc2tzU2VydmljZVxuXHRsZXQgdGFza1JlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFRhc2tzU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBUYXNrUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1Rhc2tSZXBvc2l0b3J5IH1cblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR0YXNrc1NlcnZpY2UgPSBhd2FpdCAgbW9kdWxlLmdldDxUYXNrc1NlcnZpY2U+KFRhc2tzU2VydmljZSlcblx0XHR0YXNrUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VGFza1JlcG9zaXRvcnk+KFRhc2tSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdnZXRUYXNrcycsICgpID0+IHtcblx0XHRpdCgnR2V0cyBhbGwgdGFza3MgZnJvbSB0aGUgcmVwb3NpdG9yeScsIGFzeW5jICgpID0+IHtcblx0XHRcdHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzLm1vY2tSZXNvbHZlZFZhbHVlKCdzb21lVmFsdWUnKVxuXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZ2V0VGFza3MpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGNvbnN0IGZpbHRlcnM6IEdldFRhc2tzRmlsdGVyRHRvID0geyBzdGF0dXM6IFRhc2tTdGF0dXMuSU5fUFJPR1JFU1MsIHNlYXJjaDogJ1NvbWUgc2VhcmNoIHF1ZXJ5J31cblx0XHRcdC8vIENhbGwgdGFza3NTZXJ2aWNlLmdldFRhc2tzXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0YXNrc1NlcnZpY2UuZ2V0VGFza3MoKVxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzKS50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoJ3NvbWVWYWx1ZScpXG5cdFx0XHQvLyBleHBlY3QgdGFza1JlcG9zaXRvcnkuZ2V0VGFza3MgVE8gSEFWRSBCRUVOIENBTExFRFxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tCeUlkJywgKCkgPT4ge1xuXHRcdGl0KCdjYWxscyB0YXNrUmVwb3NpdG9yeS5maW5kT25lKCkgYW5kIHN1Y2Nlc3NmdWxseSByZXRyaWV2ZSBhbmQgcmV0dXJuIHRoZSB0YXNrJywgKCkgPT4ge1xuXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvdyBhbiBlcnJvciBhcyB0YXNrIGlzIG5vdCBmb3VuZCcsICgpID0+IHtcblxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==