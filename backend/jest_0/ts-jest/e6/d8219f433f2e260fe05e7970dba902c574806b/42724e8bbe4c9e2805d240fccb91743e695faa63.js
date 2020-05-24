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
        it('validates and return the user based on JWT payload', async () => {
            const user = new user_entity_1.User();
            user.username = 'TestUser';
            userRepository.findOne.mockResolvedValue(user);
            const result = await jwtStrategy.validate({ username: 'TestUser' });
            expect(userRepository.findOne).toHaveBeenCalledWith({ userName: 'TestUser' });
        });
        it('throws unauthorized exception as user cannot be found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsK0NBQW9DO0FBR3BDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUNsQixDQUFDLENBQUE7QUFDRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFdBQXVCLENBQUE7SUFDM0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVix3QkFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFdBQVcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWEsd0JBQVUsQ0FBQyxDQUFBO1FBQ3RELGNBQWMsR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRSxNQUFNLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtZQUUxQixjQUFjLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO1lBQ25FLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQTtRQUU3RSxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFHLEVBQUU7UUFFakUsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC9qd3Quc3RyYXRlZ3kuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKd3RTdGF0ZWd5IH0gZnJvbSAnLi9qd3Quc3RhdGVneSdcbmltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5lbnRpdHknXG5cblxuY29uc3QgbW9ja1VzZXJSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0ZmluZE9uZTogamVzdC5mbigpXG59KVxuZGVzY3JpYmUoJ0p3dFN0cmF0ZWd5JywgKCkgPT4ge1xuXHRsZXQgand0U3RyYXRlZ3k6IEp3dFN0YXRlZ3lcblx0bGV0IHVzZXJSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRKd3RTdGF0ZWd5LFxuXHRcdFx0XHR7IHByb3ZpZGU6IFVzZXJSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVXNlclJlcG9zaXRvcnkgfSxcblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHRqd3RTdHJhdGVneSA9IGF3YWl0IG1vZHVsZS5nZXQ8Snd0U3RhdGVneT4oSnd0U3RhdGVneSlcblx0XHR1c2VyUmVwb3NpdG9yeSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgndmFsaWRhdGUnLCAoKSA9PiB7XG5cdFx0aXQoJ3ZhbGlkYXRlcyBhbmQgcmV0dXJuIHRoZSB1c2VyIGJhc2VkIG9uIEpXVCBwYXlsb2FkJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdXNlciA9IG5ldyBVc2VyKClcblx0XHRcdHVzZXIudXNlcm5hbWUgPSAnVGVzdFVzZXInXG5cblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUodXNlcilcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGp3dFN0cmF0ZWd5LnZhbGlkYXRlKHsgdXNlcm5hbWU6ICdUZXN0VXNlcicgfSlcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5maW5kT25lKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7IHVzZXJOYW1lOiAnVGVzdFVzZXInfSlcblx0XHRcdFxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIHVuYXV0aG9yaXplZCBleGNlcHRpb24gYXMgdXNlciBjYW5ub3QgYmUgZm91bmQnLCAoKSA9PiB7XG5cblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=