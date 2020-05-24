"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_stategy_1 = require("./jwt.stategy");
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const user_entity_1 = require("./user.entity");
const mockUserRepository = () => ({
    findOne: jest.fn()
});
describe('JwtStrategy', () => {
    let jwtStrategy;
    let userRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                jwt_stategy_1.JwtStategy,
                { provide: user_repository_1.UserRepository, useFactory: mockUserRepository },
            ],
        }).compile();
        jwtStrategy = await module.get(jwt_stategy_1.JwtStategy);
        userRepository = await module.get(user_repository_1.UserRepository);
    });
    describe('validate', () => {
        it('validates and return the user based on JWT payload', () => {
            const user = new user_entity_1.User();
            user.username = 'TestUser';
        });
        it('throws unauthorized exception as user cannot be found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsK0NBQW9DO0FBR3BDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUNsQixDQUFDLENBQUE7QUFDRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFdBQXVCLENBQUE7SUFDM0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVix3QkFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFdBQVcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWEsd0JBQVUsQ0FBQyxDQUFBO1FBQ3RELGNBQWMsR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxHQUFHLEVBQUU7WUFDN0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7UUFHM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1FBRWpFLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvand0LnN0cmF0ZWd5LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnd0U3RhdGVneSB9IGZyb20gJy4vand0LnN0YXRlZ3knXG5pbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuXG5cbmNvbnN0IG1vY2tVc2VyUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cdGZpbmRPbmU6IGplc3QuZm4oKVxufSlcbmRlc2NyaWJlKCdKd3RTdHJhdGVneScsICgpID0+IHtcblx0bGV0IGp3dFN0cmF0ZWd5OiBKd3RTdGF0ZWd5XG5cdGxldCB1c2VyUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0Snd0U3RhdGVneSxcblx0XHRcdFx0eyBwcm92aWRlOiBVc2VyUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1VzZXJSZXBvc2l0b3J5IH0sXG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0and0U3RyYXRlZ3kgPSBhd2FpdCBtb2R1bGUuZ2V0PEp3dFN0YXRlZ3k+KEp3dFN0YXRlZ3kpXG5cdFx0dXNlclJlcG9zaXRvcnkgPSBhd2FpdCAgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlJywgKCkgPT4ge1xuXHRcdGl0KCd2YWxpZGF0ZXMgYW5kIHJldHVybiB0aGUgdXNlciBiYXNlZCBvbiBKV1QgcGF5bG9hZCcsICgpID0+IHtcblx0XHRcdGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpXG5cdFx0XHR1c2VyLnVzZXJuYW1lID0gJ1Rlc3RVc2VyJ1xuXHRcdFx0XG5cblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyB1bmF1dGhvcml6ZWQgZXhjZXB0aW9uIGFzIHVzZXIgY2Fubm90IGJlIGZvdW5kJywgKCkgPT4ge1xuXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9