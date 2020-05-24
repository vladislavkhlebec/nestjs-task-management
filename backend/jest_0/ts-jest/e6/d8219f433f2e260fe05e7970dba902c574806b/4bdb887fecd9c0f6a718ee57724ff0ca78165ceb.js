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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFHbEQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0NBQ2xCLENBQUMsQ0FBQTtBQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzVCLElBQUksV0FBdUIsQ0FBQTtJQUMzQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLHdCQUFVO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBYSx3QkFBVSxDQUFDLENBQUE7UUFDdEQsY0FBYyxHQUFHLE1BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ25FLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEp3dFN0YXRlZ3kgfSBmcm9tICcuL2p3dC5zdGF0ZWd5J1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknXG5cblxuY29uc3QgbW9ja1VzZXJSZXBvc2l0b3J5ID0gKCkgPT4gKHtcblx0ZmluZE9uZTogamVzdC5mbigpXG59KVxuZGVzY3JpYmUoJ0p3dFN0cmF0ZWd5JywgKCkgPT4ge1xuXHRsZXQgand0U3RyYXRlZ3k6IEp3dFN0YXRlZ3lcblx0bGV0IHVzZXJSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRKd3RTdGF0ZWd5LFxuXHRcdFx0XHR7IHByb3ZpZGU6IFVzZXJSZXBvc2l0b3J5LCB1c2VGYWN0b3J5OiBtb2NrVXNlclJlcG9zaXRvcnkgfSxcblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHRqd3RTdHJhdGVneSA9IGF3YWl0IG1vZHVsZS5nZXQ8Snd0U3RhdGVneT4oSnd0U3RhdGVneSlcblx0XHR1c2VyUmVwb3NpdG9yeSA9IGF3YWl0ICBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9