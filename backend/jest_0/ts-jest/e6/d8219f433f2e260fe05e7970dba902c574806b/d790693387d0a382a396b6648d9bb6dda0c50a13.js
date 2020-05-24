"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const mockCredentialsDro = { username: 'TestUsername', password: 'testPassword' };
describe('UserRepository', () => {
    let userRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                user_repository_1.UserRepository,
            ],
        }).compile();
        userRepository = await module.get(user_repository_1.UserRepository);
    });
    describe('signUp', () => {
        let save;
        beforeEach(() => {
            save = jest.fn();
            userRepository.create = jest.fn().mockResolvedValue({ save });
        });
        it('successfully signs up the user', async () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUVsRCxNQUFNLGtCQUFrQixHQUFHLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUE7QUFFaEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2FBQ2Q7U0FDRCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFWixjQUFjLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQTtRQUVSLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ2hCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUVoRCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5J1xuXG5jb25zdCBtb2NrQ3JlZGVudGlhbHNEcm8gPSB7IHVzZXJuYW1lOiAnVGVzdFVzZXJuYW1lJywgcGFzc3dvcmQ6ICd0ZXN0UGFzc3dvcmQnfVxuXG5kZXNjcmliZSgnVXNlclJlcG9zaXRvcnknLCAoKSA9PiB7XG5cdGxldCB1c2VyUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VXNlclJlcG9zaXRvcnksXG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dXNlclJlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnc2lnblVwJywgKCkgPT4ge1xuXHRcdGxldCBzYXZlXG5cblx0XHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRcdHNhdmUgPSBqZXN0LmZuKClcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmNyZWF0ZSA9IGplc3QuZm4oKS5tb2NrUmVzb2x2ZWRWYWx1ZSh7IHNhdmUgfSlcblx0XHR9KVxuXG5cdFx0aXQoJ3N1Y2Nlc3NmdWxseSBzaWducyB1cCB0aGUgdXNlcicsIGFzeW5jICgpID0+IHtcblx0XHRcdFxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==