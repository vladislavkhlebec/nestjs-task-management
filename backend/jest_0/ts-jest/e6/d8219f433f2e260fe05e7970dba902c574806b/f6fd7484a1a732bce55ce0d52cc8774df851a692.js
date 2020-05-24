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
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL2p3dC5zdHJhdGVneS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLDZDQUFzQztBQUN0Qyx1REFBa0Q7QUFHbEQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0NBQ2xCLENBQUMsQ0FBQTtBQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzVCLElBQUksV0FBdUIsQ0FBQTtJQUMzQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLHdCQUFVO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO2FBQzNEO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBYSx3QkFBVSxDQUFDLENBQUE7SUFFdkQsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvand0LnN0cmF0ZWd5LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnd0U3RhdGVneSB9IGZyb20gJy4vand0LnN0YXRlZ3knXG5pbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcblxuXG5jb25zdCBtb2NrVXNlclJlcG9zaXRvcnkgPSAoKSA9PiAoe1xuXHRmaW5kT25lOiBqZXN0LmZuKClcbn0pXG5kZXNjcmliZSgnSnd0U3RyYXRlZ3knLCAoKSA9PiB7XG5cdGxldCBqd3RTdHJhdGVneTogSnd0U3RhdGVneVxuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdEp3dFN0YXRlZ3ksXG5cdFx0XHRcdHsgcHJvdmlkZTogVXNlclJlcG9zaXRvcnksIHVzZUZhY3Rvcnk6IG1vY2tVc2VyUmVwb3NpdG9yeSB9LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdGp3dFN0cmF0ZWd5ID0gYXdhaXQgbW9kdWxlLmdldDxKd3RTdGF0ZWd5PihKd3RTdGF0ZWd5KVxuXHRcdFxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=