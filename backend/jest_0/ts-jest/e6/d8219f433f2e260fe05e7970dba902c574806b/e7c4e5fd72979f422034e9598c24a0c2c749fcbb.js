"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const mockCredentialsDto = { username: 'TestUsername', password: 'testPassword' };
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
            userRepository.create = jest.fn().mockReturnValue({ save });
        });
        it('successfully signs up the user', () => {
            save.mockResolvedValue(undefined);
            expect(userRepository.signUp(mockCredentialsDto)).resolves.not.toThrow();
        });
        it('throws a conflict exception as username alreay exists', () => {
            save.mockRejectedValue({ code: '23505' });
            expect(userRepository.signUp(mockCredentialsDto)).rejects.toThrow(common_1.ConflictException);
        });
        it('throws a conflict exception as username alreay exists', () => {
            save.mockRejectedValue({ code: '2350123' }); //unhandled error code
            expect(userRepository.signUp(mockCredentialsDto)).rejects.toThrow(common_1.InternalServerErrorException);
        });
    });
    describe('validateUserPassword', () => {
        let user;
        beforeEach(() => {
            userRepository.findOne = jest.fn();
            user = new user_entity_1.User();
            user.username = 'TestUsername';
            user.validatedPassword = jest.fn();
        });
        it('returns the username as validation is successful', async () => {
            userRepository.findOne.mockResolvedValue(user);
            user.validatePassword.mockResolvedValue(true);
            const result = await userRepository.validateUserPassword(mockCredentialsDto);
            expect(result).toEqual('TestUsername');
        });
        it('returns null as user cannot be found', () => {
        });
        it('returns null as password is invalid', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFDaEYsK0NBQW9DO0FBRXBDLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQTtBQUVoRixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksY0FBYyxDQUFBO0lBRWxCLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1YsZ0NBQWM7YUFDZDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxDQUFBO1FBRVIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7WUFDaEIsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2pDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3pFLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLHVEQUF1RCxFQUFFLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTtZQUN4QyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBaUIsQ0FBQyxDQUFBO1FBQ3JGLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLHVEQUF1RCxFQUFFLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQSxDQUFDLHNCQUFzQjtZQUNqRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQ0FBNEIsQ0FBQyxDQUFBO1FBQ2hHLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLElBQUksSUFBSSxDQUFBO1FBRVIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ2xDLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQTtZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2pFLGNBQWMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTdDLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7UUFFaEQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1FBRS9DLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvdXNlci5yZXBvc2l0b3J5LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBDb25mbGljdEV4Y2VwdGlvbiwgSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5lbnRpdHknXG5cbmNvbnN0IG1vY2tDcmVkZW50aWFsc0R0byA9IHsgdXNlcm5hbWU6ICdUZXN0VXNlcm5hbWUnLCBwYXNzd29yZDogJ3Rlc3RQYXNzd29yZCd9XG5cbmRlc2NyaWJlKCdVc2VyUmVwb3NpdG9yeScsICgpID0+IHtcblx0bGV0IHVzZXJSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRVc2VyUmVwb3NpdG9yeSxcblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR1c2VyUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VXNlclJlcG9zaXRvcnk+KFVzZXJSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdzaWduVXAnLCAoKSA9PiB7XG5cdFx0bGV0IHNhdmVcblxuXHRcdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFx0c2F2ZSA9IGplc3QuZm4oKVxuXHRcdFx0dXNlclJlcG9zaXRvcnkuY3JlYXRlID0gamVzdC5mbigpLm1vY2tSZXR1cm5WYWx1ZSh7IHNhdmUgfSlcblx0XHR9KVxuXG5cdFx0aXQoJ3N1Y2Nlc3NmdWxseSBzaWducyB1cCB0aGUgdXNlcicsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1Jlc29sdmVkVmFsdWUodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZXNvbHZlcy5ub3QudG9UaHJvdygpXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgYSBjb25mbGljdCBleGNlcHRpb24gYXMgdXNlcm5hbWUgYWxyZWF5IGV4aXN0cycsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1JlamVjdGVkVmFsdWUoeyBjb2RlOiAnMjM1MDUnfSlcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVqZWN0cy50b1Rocm93KENvbmZsaWN0RXhjZXB0aW9uKVxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIGEgY29uZmxpY3QgZXhjZXB0aW9uIGFzIHVzZXJuYW1lIGFscmVheSBleGlzdHMnLCAoKSA9PiB7XG5cdFx0XHRzYXZlLm1vY2tSZWplY3RlZFZhbHVlKHsgY29kZTogJzIzNTAxMjMnfSkgLy91bmhhbmRsZWQgZXJyb3IgY29kZVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZWplY3RzLnRvVGhyb3coSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbilcblx0XHR9KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCd2YWxpZGF0ZVVzZXJQYXNzd29yZCcsICgpID0+IHtcblx0XHRsZXQgdXNlclxuXG5cdFx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lID0gamVzdC5mbigpXG5cdFx0XHR1c2VyID0gbmV3IFVzZXIoKVxuXHRcdFx0dXNlci51c2VybmFtZSA9ICdUZXN0VXNlcm5hbWUnXG5cdFx0XHR1c2VyLnZhbGlkYXRlZFBhc3N3b3JkID0gamVzdC5mbigpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIHRoZSB1c2VybmFtZSBhcyB2YWxpZGF0aW9uIGlzIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKHVzZXIpXG5cdFx0XHR1c2VyLnZhbGlkYXRlUGFzc3dvcmQubW9ja1Jlc29sdmVkVmFsdWUodHJ1ZSlcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlclJlcG9zaXRvcnkudmFsaWRhdGVVc2VyUGFzc3dvcmQobW9ja0NyZWRlbnRpYWxzRHRvKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgnVGVzdFVzZXJuYW1lJylcblx0XHR9KVxuXG5cdFx0aXQoJ3JldHVybnMgbnVsbCBhcyB1c2VyIGNhbm5vdCBiZSBmb3VuZCcsICgpID0+IHtcblxuXHRcdH0pXG5cblx0XHRpdCgncmV0dXJucyBudWxsIGFzIHBhc3N3b3JkIGlzIGludmFsaWQnLCAoKSA9PiB7XG5cblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=