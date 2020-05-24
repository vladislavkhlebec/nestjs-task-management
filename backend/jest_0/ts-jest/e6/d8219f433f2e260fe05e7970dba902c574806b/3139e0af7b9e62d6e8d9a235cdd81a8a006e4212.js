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
            expect(user.validatePassword).not.toHaveBeenCalled();
            expect(result).toBeNull();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFDaEYsK0NBQW9DO0FBRXBDLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQTtBQUVoRixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksY0FBYyxDQUFBO0lBRWxCLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1YsZ0NBQWM7YUFDZDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxDQUFBO1FBRVIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7WUFDaEIsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2pDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFR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Ii9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLnJlcG9zaXRvcnkuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcbmltcG9ydCB7IENvbmZsaWN0RXhjZXB0aW9uLCBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSdcblxuY29uc3QgbW9ja0NyZWRlbnRpYWxzRHRvID0geyB1c2VybmFtZTogJ1Rlc3RVc2VybmFtZScsIHBhc3N3b3JkOiAndGVzdFBhc3N3b3JkJ31cblxuZGVzY3JpYmUoJ1VzZXJSZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFVzZXJSZXBvc2l0b3J5LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3NpZ25VcCcsICgpID0+IHtcblx0XHRsZXQgc2F2ZVxuXG5cdFx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0XHRzYXZlID0gamVzdC5mbigpXG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5jcmVhdGUgPSBqZXN0LmZuKCkubW9ja1JldHVyblZhbHVlKHsgc2F2ZSB9KVxuXHRcdH0pXG5cblx0XHRpdCgnc3VjY2Vzc2Z1bGx5IHNpZ25zIHVwIHRoZSB1c2VyJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlc29sdmVzLm5vdC50b1Rocm93KClcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyBhIGNvbmZsaWN0IGV4Y2VwdGlvbiBhcyB1c2VybmFtZSBhbHJlYXkgZXhpc3RzJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVqZWN0ZWRWYWx1ZSh7IGNvZGU6ICcyMzUwNSd9KVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZWplY3RzLnRvVGhyb3coQ29uZmxpY3RFeGNlcHRpb24pXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgYSBjb25mbGljdCBleGNlcHRpb24gYXMgdXNlcm5hbWUgYWxyZWF5IGV4aXN0cycsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1JlamVjdGVkVmFsdWUoeyBjb2RlOiAnMjM1MDEyMyd9KSAvL3VuaGFuZGxlZCBlcnJvciBjb2RlXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlamVjdHMudG9UaHJvdyhJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlVXNlclBhc3N3b3JkJywgKCkgPT4ge1xuXHRcdGxldCB1c2VyXG5cblx0XHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUgPSBqZXN0LmZuKClcblx0XHRcdHVzZXIgPSBuZXcgVXNlcigpXG5cdFx0XHR1c2VyLnVzZXJuYW1lID0gJ1Rlc3RVc2VybmFtZSdcblx0XHRcdHVzZXIudmFsaWRhdGVQYXNzd29yZCA9IGplc3QuZm4oKVxuXHRcdH0pXG5cblx0XHRpdCgncmV0dXJucyB0aGUgdXNlcm5hbWUgYXMgdmFsaWRhdGlvbiBpcyBzdWNjZXNzZnVsJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dXNlclJlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1c2VyKVxuXHRcdFx0dXNlci52YWxpZGF0ZVBhc3N3b3JkLm1vY2tSZXNvbHZlZFZhbHVlKHRydWUpXG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnZhbGlkYXRlVXNlclBhc3N3b3JkKG1vY2tDcmVkZW50aWFsc0R0bylcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoJ1Rlc3RVc2VybmFtZScpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIG51bGwgYXMgdXNlciBjYW5ub3QgYmUgZm91bmQnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKG51bGwpXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS52YWxpZGF0ZVVzZXJQYXNzd29yZChtb2NrQ3JlZGVudGlhbHNEdG8pXG5cdFx0XHRleHBlY3QodXNlci52YWxpZGF0ZVBhc3N3b3JkKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0JlTnVsbCgpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIG51bGwgYXMgcGFzc3dvcmQgaXMgaW52YWxpZCcsIGFzeW5jICgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUodXNlcilcblx0XHRcdHVzZXIudmFsaWRhdGVQYXNzd29yZC5tb2NrUmVzb2x2ZWRWYWx1ZShmYWxzZSlcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnZhbGlkYXRlVXNlclBhc3N3b3JkKG1vY2tDcmVkZW50aWFsc0R0bylcblx0XHRcdGV4cGVjdCh1c2VyLnZhbGlkYXRlUGFzc3dvcmQpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvQmVOdWxsKClcblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=