"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_service_1 = require("./tasks.service");
describe('TaskService', () => {
    let tasksService;
    let taskRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                tasks_service_1.TasksService
            ],
        }).compile();
        tasksService = await module.get(tasks_service_1.TasksService);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLnNlcnZpY2Uuc3BlYy50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFzQztBQUN0QyxtREFBOEM7QUFFOUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxZQUFZLENBQUE7SUFDaEIsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDViw0QkFBWTthQUNaO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosWUFBWSxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBZSw0QkFBWSxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL3Rhc2tzL3Rhc2suc2VydmljZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBUYXNrc1NlcnZpY2UgfSBmcm9tICcuL3Rhc2tzLnNlcnZpY2UnXG5cbmRlc2NyaWJlKCdUYXNrU2VydmljZScsICgpID0+IHtcblx0bGV0IHRhc2tzU2VydmljZVxuXHRsZXQgdGFza1JlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFRhc2tzU2VydmljZVxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHRhc2tzU2VydmljZSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFRhc2tzU2VydmljZT4oVGFza3NTZXJ2aWNlKVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=