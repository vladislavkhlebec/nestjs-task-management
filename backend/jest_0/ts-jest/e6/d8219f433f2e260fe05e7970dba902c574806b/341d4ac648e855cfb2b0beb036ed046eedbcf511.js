"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
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
            user.validatePassword = jest.fn();
        });
        it('returns the username as validation is successful', async () => {
            userRepository.findOne.mockResolvedValue(user);
            user.validatePassword.mockResolvedValue(true);
            const result = await userRepository.validateUserPassword(mockCredentialsDto);
            expect(result).toEqual('TestUsername');
        });
        it('returns null as user cannot be found', async () => {
            userRepository.findOne.mockResolvedValue(null);
            const result = await userRepository.validateUserPassword(mockCredentialsDto);
            expect(user.validatePassword).not.toHaveBeenCalled();
            expect(result).toBeNull();
        });
        it('returns null as password is invalid', async () => {
            userRepository.findOne.mockResolvedValue(user);
            user.validatePassword.mockResolvedValue(false);
            const result = await userRepository.validateUserPassword(mockCredentialsDto);
            expect(user.validatePassword).toHaveBeenCalled();
            expect(result).toBeNull();
        });
    });
    describe('hashPassword', () => {
        it('calls bcrypt.hash to generate a hash', async () => {
            bcrypt.hash = jest.fn().mockResolvedValue('testHash');
            expect(bcrypt.hash).not.toHaveBeenCalled();
            const result = await userRepository.hashPassword('testPassword', 'testSalt');
            expect(bcrypt.hash).toHaveBeenCalledWith('testPassword', 'testSalt');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFDaEYsK0NBQW9DO0FBQ3BDLG1DQUFrQztBQUVsQyxNQUFNLGtCQUFrQixHQUFHLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUE7QUFFaEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2FBQ2Q7U0FDRCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFWixjQUFjLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQTtRQUVSLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ2hCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxD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LEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFFckUsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLnJlcG9zaXRvcnkuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcbmltcG9ydCB7IENvbmZsaWN0RXhjZXB0aW9uLCBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSdcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuY29uc3QgbW9ja0NyZWRlbnRpYWxzRHRvID0geyB1c2VybmFtZTogJ1Rlc3RVc2VybmFtZScsIHBhc3N3b3JkOiAndGVzdFBhc3N3b3JkJ31cblxuZGVzY3JpYmUoJ1VzZXJSZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFVzZXJSZXBvc2l0b3J5LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3NpZ25VcCcsICgpID0+IHtcblx0XHRsZXQgc2F2ZVxuXG5cdFx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0XHRzYXZlID0gamVzdC5mbigpXG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5jcmVhdGUgPSBqZXN0LmZuKCkubW9ja1JldHVyblZhbHVlKHsgc2F2ZSB9KVxuXHRcdH0pXG5cblx0XHRpdCgnc3VjY2Vzc2Z1bGx5IHNpZ25zIHVwIHRoZSB1c2VyJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlc29sdmVzLm5vdC50b1Rocm93KClcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyBhIGNvbmZsaWN0IGV4Y2VwdGlvbiBhcyB1c2VybmFtZSBhbHJlYXkgZXhpc3RzJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVqZWN0ZWRWYWx1ZSh7IGNvZGU6ICcyMzUwNSd9KVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZWplY3RzLnRvVGhyb3coQ29uZmxpY3RFeGNlcHRpb24pXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgYSBjb25mbGljdCBleGNlcHRpb24gYXMgdXNlcm5hbWUgYWxyZWF5IGV4aXN0cycsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1JlamVjdGVkVmFsdWUoeyBjb2RlOiAnMjM1MDEyMyd9KSAvL3VuaGFuZGxlZCBlcnJvciBjb2RlXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlamVjdHMudG9UaHJvdyhJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlVXNlclBhc3N3b3JkJywgKCkgPT4ge1xuXHRcdGxldCB1c2VyXG5cblx0XHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUgPSBqZXN0LmZuKClcblx0XHRcdHVzZXIgPSBuZXcgVXNlcigpXG5cdFx0XHR1c2VyLnVzZXJuYW1lID0gJ1Rlc3RVc2VybmFtZSdcblx0XHRcdHVzZXIudmFsaWRhdGVQYXNzd29yZCA9IGplc3QuZm4oKVxuXHRcdH0pXG5cblx0XHRpdCgncmV0dXJucyB0aGUgdXNlcm5hbWUgYXMgdmFsaWRhdGlvbiBpcyBzdWNjZXNzZnVsJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dXNlclJlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1c2VyKVxuXHRcdFx0dXNlci52YWxpZGF0ZVBhc3N3b3JkLm1vY2tSZXNvbHZlZFZhbHVlKHRydWUpXG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnZhbGlkYXRlVXNlclBhc3N3b3JkKG1vY2tDcmVkZW50aWFsc0R0bylcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoJ1Rlc3RVc2VybmFtZScpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIG51bGwgYXMgdXNlciBjYW5ub3QgYmUgZm91bmQnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKG51bGwpXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS52YWxpZGF0ZVVzZXJQYXNzd29yZChtb2NrQ3JlZGVudGlhbHNEdG8pXG5cdFx0XHRleHBlY3QodXNlci52YWxpZGF0ZVBhc3N3b3JkKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0JlTnVsbCgpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIG51bGwgYXMgcGFzc3dvcmQgaXMgaW52YWxpZCcsIGFzeW5jICgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUodXNlcilcblx0XHRcdHVzZXIudmFsaWRhdGVQYXNzd29yZC5tb2NrUmVzb2x2ZWRWYWx1ZShmYWxzZSlcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnZhbGlkYXRlVXNlclBhc3N3b3JkKG1vY2tDcmVkZW50aWFsc0R0bylcblx0XHRcdGV4cGVjdCh1c2VyLnZhbGlkYXRlUGFzc3dvcmQpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9CZU51bGwoKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ2hhc2hQYXNzd29yZCcsICgpID0+IHtcblx0XHRpdCgnY2FsbHMgYmNyeXB0Lmhhc2ggdG8gZ2VuZXJhdGUgYSBoYXNoJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YmNyeXB0Lmhhc2ggPSBqZXN0LmZuKCkubW9ja1Jlc29sdmVkVmFsdWUoJ3Rlc3RIYXNoJylcblx0XHRcdGV4cGVjdChiY3J5cHQuaGFzaCkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlclJlcG9zaXRvcnkuaGFzaFBhc3N3b3JkKCd0ZXN0UGFzc3dvcmQnLCAndGVzdFNhbHQnKVxuXHRcdFx0ZXhwZWN0KGJjcnlwdC5oYXNoKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgndGVzdFBhc3N3b3JkJywgJ3Rlc3RTYWx0Jylcblx0XHRcdFxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==