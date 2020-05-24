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
    delete: jest.fn()
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
            expect(taskRepository.createTask).toHaveBeenCalledWith(createTaskDto, mockUser);
            expect(result).toEqual('success');
        });
    });
    describe('deleteTask', () => {
        it('calls taskRepository.deleteTask() to delete a task', async () => {
            taskRepository.delete.mockResolvedValue({ affected: 1 });
            expect(taskRepository.delete).not.toHaveBeenCalled();
            await tasksService.deleteTask(1, mockUser);
            expect(taskRepository.delete).toHaveBeenCalledWith({ id: 1, userId: mockUser.id });
        });
        it('throws an error as task could not be found', () => {
            taskRepository.delete.mockResolvedValue({ affected: 0 });
            expect(tasksService.deleteTask(1, mockUser)).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('updateTaskStatus', () => {
        it('updates task status', async () => {
            tasksService.getTaskById = jest.fn().mockResolvedValue({
                status: task_status_enum_1.TaskStatus.OPEN,
                save: jest.fn().mockResolvedValue(true)
            });
            expect(tasksService.getTaskById).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlEQUErQztBQUMvQywyQ0FBa0Q7QUFJbEQsTUFBTSxRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQTtBQUVsRCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDakIsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTtnQkFDWixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFlBQVksR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWUsNEJBQVksQ0FBQyxDQUFBO1FBQzVELGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FB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QVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3hELENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBUYXNrc1NlcnZpY2UgfSBmcm9tICcuL3Rhc2tzLnNlcnZpY2UnXG5pbXBvcnQgeyBUYXNrUmVwb3NpdG9yeSB9IGZyb20gJy4vdGFzay5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgR2V0VGFza3NGaWx0ZXJEdG8gfSBmcm9tICcuL2R0by9nZXQtdGFza3MtZmlsdGVyLmR0bydcbmltcG9ydCB7IFRhc2tTdGF0dXMgfSBmcm9tICcuL3Rhc2stc3RhdHVzLmVudW0nXG5pbXBvcnQgeyBOb3RGb3VuZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ3JlYXRlVGFza0R0byB9IGZyb20gJy4vZHRvL2NyZWF0ZS10YXNrLmR0bydcbmltcG9ydCBtb2NrID0gamVzdC5tb2NrXG5cbmNvbnN0IG1vY2tVc2VyID0geyB1c2VybmFtZTogJ1Rlc3QgdXNlcicsIGlkOiAxMiB9XG5cbmNvbnN0IG1vY2tUYXNrUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cdGdldFRhc2tzOiBqZXN0LmZuKCksXG5cdGZpbmRPbmU6IGplc3QuZm4oKSxcblx0Y3JlYXRlVGFzazogamVzdC5mbigpLFxuXHRkZWxldGU6IGplc3QuZm4oKVxufSlcblxuZGVzY3JpYmUoJ1Rhc2tTZXJ2aWNlJywgKCkgPT4ge1xuXHRsZXQgdGFza3NTZXJ2aWNlXG5cdGxldCB0YXNrUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VGFza3NTZXJ2aWNlLFxuXHRcdFx0XHR7IHByb3ZpZGU6IFRhc2tSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVGFza1JlcG9zaXRvcnkgfVxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHRhc2tzU2VydmljZSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFRhc2tzU2VydmljZT4oVGFza3NTZXJ2aWNlKVxuXHRcdHRhc2tSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxUYXNrUmVwb3NpdG9yeT4oVGFza1JlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2dldFRhc2tzJywgKCkgPT4ge1xuXHRcdGl0KCdHZXRzIGFsbCB0YXNrcyBmcm9tIHRoZSByZXBvc2l0b3J5JywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dGFza1JlcG9zaXRvcnkuZ2V0VGFza3MubW9ja1Jlc29sdmVkVmFsdWUoJ3NvbWVWYWx1ZScpXG5cblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgZmlsdGVyczogR2V0VGFza3NGaWx0ZXJEdG8gPSB7IHN0YXR1czogVGFza1N0YXR1cy5JTl9QUk9HUkVTUywgc2VhcmNoOiAnU29tZSBzZWFyY2ggcXVlcnknfVxuXHRcdFx0Ly8gQ2FsbCB0YXNrc1NlcnZpY2UuZ2V0VGFza3Ncblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRhc2tzU2VydmljZS5nZXRUYXNrcyhmaWx0ZXJzLCBtb2NrVXNlcilcblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5nZXRUYXNrcykudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0VxdWFsKCdzb21lVmFsdWUnKVxuXHRcdFx0Ly8gZXhwZWN0IHRhc2tSZXBvc2l0b3J5LmdldFRhc2tzIFRPIEhBVkUgQkVFTiBDQUxMRURcblx0XHR9KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdnZXRUYXNrQnlJZCcsKCkgPT4ge1xuXHRcdGl0KCdjYWxscyB0YXNrUmVwb3NpdG9yeS5maW5kT25lKCkgYW5kIHN1Y2Nlc3NmdWxseSByZXRyaWV2ZSBhbmQgcmV0dXJuIHRoZSB0YXNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgbW9ja1Rhc2sgPSB7IHRpdGxlOiAnVGVzdCB0YXNrJywgZGVzY3JpcHRpb246ICdUZXN0IGRlc2MnIH1cblx0XHRcdHRhc2tSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUobW9ja1Rhc2spXG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRhc2tzU2VydmljZS5nZXRUYXNrQnlJZCgxLCBtb2NrVXNlcilcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwobW9ja1Rhc2spXG5cblx0XHRcdGV4cGVjdCh0YXNrUmVwb3NpdG9yeS5maW5kT25lKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7IHdoZXJlOiB7IGlkOiAxLCB1c2VySWQ6IG1vY2tVc2VyLmlkIH19KVxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3cgYW4gZXJyb3IgYXMgdGFzayBpcyBub3QgZm91bmQnLCAoKSA9PiB7XG5cdFx0XHR0YXNrUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKG51bGwpXG5cdFx0XHRleHBlY3QodGFza3NTZXJ2aWNlLmdldFRhc2tCeUlkKDEsIG1vY2tVc2VyKSkucmVqZWN0cy50b1Rocm93KE5vdEZvdW5kRXhjZXB0aW9uKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2NyZWF0ZVRhc2snLCAoKSA9PiB7XG5cdFx0aXQoJ2NhbGxzIHRhc2tSZXBvc2l0b3J5LmNyZWF0ZSgpIGFuZCByZXR1cm4gdGhlIHJlc3VsdCcsIGFzeW5jICgpID0+IHtcblx0XHRcdHRhc2tSZXBvc2l0b3J5LmNyZWF0ZVRhc2subW9ja1Jlc29sdmVkVmFsdWUoJ3N1Y2Nlc3MnKVxuXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuY3JlYXRlVGFzaykubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgY3JlYXRlVGFza0R0bzogQ3JlYXRlVGFza0R0byA9IHsgdGl0bGU6ICdIZWxsbyB3b3JsZCcsIGRlc2NyaXB0aW9uOiAnV2UgbmVlZCBzYXZlIHRoaXMgd29ybGQgZm9ybSB5b3UnfVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdGFza3NTZXJ2aWNlLmNyZWF0ZVRhc2soY3JlYXRlVGFza0R0bywgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuY3JlYXRlVGFzaykudG9IYXZlQmVlbkNhbGxlZFdpdGgoY3JlYXRlVGFza0R0bywgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0VxdWFsKCdzdWNjZXNzJylcblx0XHR9KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdkZWxldGVUYXNrJywgKCkgPT4ge1xuXHRcdGl0KCdjYWxscyB0YXNrUmVwb3NpdG9yeS5kZWxldGVUYXNrKCkgdG8gZGVsZXRlIGEgdGFzaycsIGFzeW5jICgpID0+IHtcblx0XHRcdHRhc2tSZXBvc2l0b3J5LmRlbGV0ZS5tb2NrUmVzb2x2ZWRWYWx1ZSh7IGFmZmVjdGVkOiAxfSlcblxuXHRcdFx0ZXhwZWN0KHRhc2tSZXBvc2l0b3J5LmRlbGV0ZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0YXdhaXQgdGFza3NTZXJ2aWNlLmRlbGV0ZVRhc2soMSwgbW9ja1VzZXIpXG5cdFx0XHRleHBlY3QodGFza1JlcG9zaXRvcnkuZGVsZXRlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7aWQ6IDEsIHVzZXJJZDogbW9ja1VzZXIuaWR9KVxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIGFuIGVycm9yIGFzIHRhc2sgY291bGQgbm90IGJlIGZvdW5kJywgKCkgPT4ge1xuXHRcdFx0dGFza1JlcG9zaXRvcnkuZGVsZXRlLm1vY2tSZXNvbHZlZFZhbHVlKHsgYWZmZWN0ZWQ6IDB9KVxuXHRcdFx0ZXhwZWN0KHRhc2tzU2VydmljZS5kZWxldGVUYXNrKDEsIG1vY2tVc2VyKSkucmVqZWN0cy50b1Rocm93KE5vdEZvdW5kRXhjZXB0aW9uKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3VwZGF0ZVRhc2tTdGF0dXMnLCAoKSA9PiB7XG5cdFx0aXQoJ3VwZGF0ZXMgdGFzayBzdGF0dXMnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0YXNrc1NlcnZpY2UuZ2V0VGFza0J5SWQgPSBqZXN0LmZuKCkubW9ja1Jlc29sdmVkVmFsdWUoe1xuXHRcdFx0XHRzdGF0dXM6IFRhc2tTdGF0dXMuT1BFTixcblx0XHRcdFx0c2F2ZTogamVzdC5mbigpLm1vY2tSZXNvbHZlZFZhbHVlKHRydWUpXG5cdFx0XHR9KVxuXG5cdFx0XHRleHBlY3QodGFza3NTZXJ2aWNlLmdldFRhc2tCeUlkKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9