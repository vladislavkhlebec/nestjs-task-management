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
            expect(userRepository.findOne).toHaveBeenCalledWith({ username: 'TestUser' });
            expect(result).toEqual(user);
        });
        it('throws unauthorized exception as user cannot be found', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsK0NBQW9DO0FBR3BDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtDQUNsQixDQUFDLENBQUE7QUFDRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLFdBQXVCLENBQUE7SUFDM0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVix3QkFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxnQ0FBYyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTthQUMzRDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLFdBQVcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWEsd0JBQVUsQ0FBQyxDQUFBO1FBQ3RELGNBQWMsR0FBRyxNQUFPLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNuRSxNQUFNLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtZQUUxQixjQUFjLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO1lBQ25FLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtZQUM3RSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLHVEQUF1RCxFQUFFLEdBQUcsRUFBRTtRQUVqRSxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEp3dFN0YXRlZ3kgfSBmcm9tICcuL2p3dC5zdGF0ZWd5J1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSdcblxuXG5jb25zdCBtb2NrVXNlclJlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRmaW5kT25lOiBqZXN0LmZuKClcbn0pXG5kZXNjcmliZSgnSnd0U3RyYXRlZ3knLCAoKSA9PiB7XG5cdGxldCBqd3RTdHJhdGVneTogSnd0U3RhdGVneVxuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdEp3dFN0YXRlZ3ksXG5cdFx0XHRcdHsgcHJvdmlkZTogVXNlclJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IG1vY2tVc2VyUmVwb3NpdG9yeSB9LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdGp3dFN0cmF0ZWd5ID0gYXdhaXQgbW9kdWxlLmdldDxKd3RTdGF0ZWd5PihKd3RTdGF0ZWd5KVxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgIG1vZHVsZS5nZXQ8VXNlclJlcG9zaXRvcnk+KFVzZXJSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCd2YWxpZGF0ZScsICgpID0+IHtcblx0XHRpdCgndmFsaWRhdGVzIGFuZCByZXR1cm4gdGhlIHVzZXIgYmFzZWQgb24gSldUIHBheWxvYWQnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB1c2VyID0gbmV3IFVzZXIoKVxuXHRcdFx0dXNlci51c2VybmFtZSA9ICdUZXN0VXNlcidcblxuXHRcdFx0dXNlclJlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1c2VyKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgand0U3RyYXRlZ3kudmFsaWRhdGUoeyB1c2VybmFtZTogJ1Rlc3RVc2VyJyB9KVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHsgdXNlcm5hbWU6ICdUZXN0VXNlcicgfSlcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwodXNlcilcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyB1bmF1dGhvcml6ZWQgZXhjZXB0aW9uIGFzIHVzZXIgY2Fubm90IGJlIGZvdW5kJywgKCkgPT4ge1xuXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9