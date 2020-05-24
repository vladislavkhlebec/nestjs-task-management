"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_stategy_1 = require("./jwt.stategy");
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
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
        });
        it('throws unauthorized exception', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFHbEQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0NBQ2xCLENBQUMsQ0FBQTtBQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzVCLElBQUksV0FBdUIsQ0FBQTtJQUMzQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLHdCQUFVO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBYSx3QkFBVSxDQUFDLENBQUE7UUFDdEQsY0FBYyxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ25FLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDekIsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLEdBQUcsRUFBRTtRQUU5RCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLEVBQUU7UUFFekMsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC9qd3Quc3RyYXRlZ3kuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKd3RTdGF0ZWd5IH0gZnJvbSAnLi9qd3Quc3RhdGVneSdcbmltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5J1xuXG5cbmNvbnN0IG1vY2tVc2VyUmVwb3NpdG9yeSA9ICgpID0+ICh7XG5cdGZpbmRPbmU6IGplc3QuZm4oKVxufSlcbmRlc2NyaWJlKCdKd3RTdHJhdGVneScsICgpID0+IHtcblx0bGV0IGp3dFN0cmF0ZWd5OiBKd3RTdGF0ZWd5XG5cdGxldCB1c2VyUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0Snd0U3RhdGVneSxcblx0XHRcdFx0eyBwcm92aWRlOiBVc2VyUmVwb3NpdG9yeSwgdXNlRmFjdG9yeTogbW9ja1VzZXJSZXBvc2l0b3J5IH0sXG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0and0U3RyYXRlZ3kgPSBhd2FpdCBtb2R1bGUuZ2V0PEp3dFN0YXRlZ3k+KEp3dFN0YXRlZ3kpXG5cdFx0dXNlclJlcG9zaXRvcnkgPSBhd2FpdCAgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlJywgKCkgPT4ge1xuXHRcdGl0KCd2YWxpZGF0ZXMgYW5kIHJldHVybiB0aGUgdXNlciBiYXNlZCBvbiBKV1QgcGF5bG9hZCcsICgpID0+IHtcblxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIHVuYXV0aG9yaXplZCBleGNlcHRpb24nLCAoKSA9PiB7XG5cdFx0XHRcblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=