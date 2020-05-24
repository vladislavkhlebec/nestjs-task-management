"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
const task_repository_1 = require("./task.repository");
const mockTaskRepository = () => ({});
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFDOUMsdURBQWtEO0FBR2xELE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUVqQyxDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFlBQVksQ0FBQTtJQUNoQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosWUFBWSxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBZSw0QkFBWSxDQUFDLENBQUE7UUFDNUQsY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBRWxFLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVGFza3NTZXJ2aWNlIH0gZnJvbSAnLi90YXNrcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3Rhc2sucmVwb3NpdG9yeSdcbmltcG9ydCBtb2NrID0gamVzdC5tb2NrXG5cbmNvbnN0IG1vY2tUYXNrUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cbn0pXG5cbmRlc2NyaWJlKCdUYXNrU2VydmljZScsICgpID0+IHtcblx0bGV0IHRhc2tzU2VydmljZVxuXHRsZXQgdGFza1JlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFRhc2tzU2VydmljZSxcblx0XHRcdFx0eyBwcm92aWRlOiBUYXNrUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1Rhc2tSZXBvc2l0b3J5IH1cblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR0YXNrc1NlcnZpY2UgPSBhd2FpdCAgbW9kdWxlLmdldDxUYXNrc1NlcnZpY2U+KFRhc2tzU2VydmljZSlcblx0XHR0YXNrUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VGFza1JlcG9zaXRvcnk+KFRhc2tSZXBvc2l0b3J5KVxuXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==