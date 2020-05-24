"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_stategy_1 = require("./jwt.stategy");
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
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
            userRepository.findOne.mockResolvedValue(null);
            expect(jwtStrategy.validate({ username: 'TestUser' })).rejects.toThrow(common_1.UnauthorizedException);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFDbEQsK0NBQW9DO0FBQ3BDLDJDQUFzRDtBQUd0RCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyxDQUFBO0FBQ0YsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDNUIsSUFBSSxXQUF1QixDQUFBO0lBQzNCLElBQUksY0FBYyxDQUFBO0lBRWxCLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1Ysd0JBQVU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsZ0NBQWMsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUU7YUFDM0Q7U0FDRCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFWixXQUFXLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFhLHdCQUFVLENBQUMsQ0FBQTtRQUN0RCxjQUFjLEdBQUcsTUFBTyxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUE7SUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUN6QixFQUFFLENBQUMsb0RBQW9ELEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7WUFFMUIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QyxNQUFNLE1BQU0sR0FBRyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtZQUNuRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7WUFDN0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFHLEVBQUU7WUFDaEUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU5QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw4QkFBcUIsQ0FBQyxDQUFBO1FBQzlGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvand0LnN0cmF0ZWd5LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnd0U3RhdGVneSB9IGZyb20gJy4vand0LnN0YXRlZ3knXG5pbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuaW1wb3J0IHsgVW5hdXRob3JpemVkRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5cblxuY29uc3QgbW9ja1VzZXJSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0ZmluZE9uZTogamVzdC5mbigpXG59KVxuZGVzY3JpYmUoJ0p3dFN0cmF0ZWd5JywgKCkgPT4ge1xuXHRsZXQgand0U3RyYXRlZ3k6IEp3dFN0YXRlZ3lcblx0bGV0IHVzZXJSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRKd3RTdGF0ZWd5LFxuXHRcdFx0XHR7IHByb3ZpZGU6IFVzZXJSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVXNlclJlcG9zaXRvcnkgfSxcblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHRqd3RTdHJhdGVneSA9IGF3YWl0IG1vZHVsZS5nZXQ8Snd0U3RhdGVneT4oSnd0U3RhdGVneSlcblx0XHR1c2VyUmVwb3NpdG9yeSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgndmFsaWRhdGUnLCAoKSA9PiB7XG5cdFx0aXQoJ3ZhbGlkYXRlcyBhbmQgcmV0dXJuIHRoZSB1c2VyIGJhc2VkIG9uIEpXVCBwYXlsb2FkJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdXNlciA9IG5ldyBVc2VyKClcblx0XHRcdHVzZXIudXNlcm5hbWUgPSAnVGVzdFVzZXInXG5cblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUodXNlcilcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGp3dFN0cmF0ZWd5LnZhbGlkYXRlKHsgdXNlcm5hbWU6ICdUZXN0VXNlcicgfSlcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5maW5kT25lKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh7IHVzZXJuYW1lOiAnVGVzdFVzZXInIH0pXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0VxdWFsKHVzZXIpXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgdW5hdXRob3JpemVkIGV4Y2VwdGlvbiBhcyB1c2VyIGNhbm5vdCBiZSBmb3VuZCcsICgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUobnVsbClcblxuXHRcdFx0ZXhwZWN0KGp3dFN0cmF0ZWd5LnZhbGlkYXRlKHsgdXNlcm5hbWU6ICdUZXN0VXNlcicgfSkpLnJlamVjdHMudG9UaHJvdyhVbmF1dGhvcml6ZWRFeGNlcHRpb24pXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9