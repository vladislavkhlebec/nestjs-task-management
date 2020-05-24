"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const common_1 = require("@nestjs/common");
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
        it('returns the username as validation is successful', () => {
        });
        it('returns null as user cannot be found', () => {
        });
        it('returns null as password is invalid', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFFaEYsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFBO0FBRWhGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVixnQ0FBYzthQUNkO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUE7UUFFUixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtZQUNoQixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDekUsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1lBQ3hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDBCQUFpQixDQUFDLENBQUE7UUFDckYsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBLENBQUMsc0JBQXNCO1lBQ2pFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFDQUE0QixDQUFDLENBQUE7UUFDaEcsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDckMsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUU1RCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7UUFFaEQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1FBRS9DLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9oZXJva3UvUHJvamVjdHMvU3R1ZHlpbmcvTmVzdEpTL25lc3Rqcy10YXNrLW1hbmFnZW1lbmV0L2JhY2tlbmQvc3JjL2F1dGgvdXNlci5yZXBvc2l0b3J5LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BuZXN0anMvdGVzdGluZydcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi91c2VyLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBDb25mbGljdEV4Y2VwdGlvbiwgSW50ZXJuYWxTZXJ2ZXJFcnJvckV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuXG5jb25zdCBtb2NrQ3JlZGVudGlhbHNEdG8gPSB7IHVzZXJuYW1lOiAnVGVzdFVzZXJuYW1lJywgcGFzc3dvcmQ6ICd0ZXN0UGFzc3dvcmQnfVxuXG5kZXNjcmliZSgnVXNlclJlcG9zaXRvcnknLCAoKSA9PiB7XG5cdGxldCB1c2VyUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VXNlclJlcG9zaXRvcnksXG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dXNlclJlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnc2lnblVwJywgKCkgPT4ge1xuXHRcdGxldCBzYXZlXG5cblx0XHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRcdHNhdmUgPSBqZXN0LmZuKClcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmNyZWF0ZSA9IGplc3QuZm4oKS5tb2NrUmV0dXJuVmFsdWUoeyBzYXZlIH0pXG5cdFx0fSlcblxuXHRcdGl0KCdzdWNjZXNzZnVsbHkgc2lnbnMgdXAgdGhlIHVzZXInLCAoKSA9PiB7XG5cdFx0XHRzYXZlLm1vY2tSZXNvbHZlZFZhbHVlKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVzb2x2ZXMubm90LnRvVGhyb3coKVxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIGEgY29uZmxpY3QgZXhjZXB0aW9uIGFzIHVzZXJuYW1lIGFscmVheSBleGlzdHMnLCAoKSA9PiB7XG5cdFx0XHRzYXZlLm1vY2tSZWplY3RlZFZhbHVlKHsgY29kZTogJzIzNTA1J30pXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlamVjdHMudG9UaHJvdyhDb25mbGljdEV4Y2VwdGlvbilcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyBhIGNvbmZsaWN0IGV4Y2VwdGlvbiBhcyB1c2VybmFtZSBhbHJlYXkgZXhpc3RzJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVqZWN0ZWRWYWx1ZSh7IGNvZGU6ICcyMzUwMTIzJ30pIC8vdW5oYW5kbGVkIGVycm9yIGNvZGVcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVqZWN0cy50b1Rocm93KEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24pXG5cdFx0fSlcblx0fSlcblxuXHRkZXNjcmliZSgndmFsaWRhdGVVc2VyUGFzc3dvcmQnLCAoKSA9PiB7XG5cdFx0aXQoJ3JldHVybnMgdGhlIHVzZXJuYW1lIGFzIHZhbGlkYXRpb24gaXMgc3VjY2Vzc2Z1bCcsICgpID0+IHtcblxuXHRcdH0pXG5cblx0XHRpdCgncmV0dXJucyBudWxsIGFzIHVzZXIgY2Fubm90IGJlIGZvdW5kJywgKCkgPT4ge1xuXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIG51bGwgYXMgcGFzc3dvcmQgaXMgaW52YWxpZCcsICgpID0+IHtcblxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==