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
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFFaEYsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFBO0FBRWhGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVixnQ0FBYzthQUNkO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUE7UUFFUixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtZQUNoQixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDekUsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1lBQ3hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDBCQUFpQixDQUFDLENBQUE7UUFDckYsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBLENBQUMsc0JBQXNCO1lBQ2pFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFDQUE0QixDQUFDLENBQUE7UUFDaEcsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDckMsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUU1RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgQ29uZmxpY3RFeGNlcHRpb24sIEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcblxuY29uc3QgbW9ja0NyZWRlbnRpYWxzRHRvID0geyB1c2VybmFtZTogJ1Rlc3RVc2VybmFtZScsIHBhc3N3b3JkOiAndGVzdFBhc3N3b3JkJ31cblxuZGVzY3JpYmUoJ1VzZXJSZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFVzZXJSZXBvc2l0b3J5LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3NpZ25VcCcsICgpID0+IHtcblx0XHRsZXQgc2F2ZVxuXG5cdFx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0XHRzYXZlID0gamVzdC5mbigpXG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5jcmVhdGUgPSBqZXN0LmZuKCkubW9ja1JldHVyblZhbHVlKHsgc2F2ZSB9KVxuXHRcdH0pXG5cblx0XHRpdCgnc3VjY2Vzc2Z1bGx5IHNpZ25zIHVwIHRoZSB1c2VyJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlc29sdmVzLm5vdC50b1Rocm93KClcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyBhIGNvbmZsaWN0IGV4Y2VwdGlvbiBhcyB1c2VybmFtZSBhbHJlYXkgZXhpc3RzJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVqZWN0ZWRWYWx1ZSh7IGNvZGU6ICcyMzUwNSd9KVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZWplY3RzLnRvVGhyb3coQ29uZmxpY3RFeGNlcHRpb24pXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgYSBjb25mbGljdCBleGNlcHRpb24gYXMgdXNlcm5hbWUgYWxyZWF5IGV4aXN0cycsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1JlamVjdGVkVmFsdWUoeyBjb2RlOiAnMjM1MDEyMyd9KSAvL3VuaGFuZGxlZCBlcnJvciBjb2RlXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlamVjdHMudG9UaHJvdyhJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKVxuXHRcdH0pXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlVXNlclBhc3N3b3JkJywgKCkgPT4ge1xuXHRcdGl0KCdyZXR1cm5zIHRoZSB1c2VybmFtZSBhcyB2YWxpZGF0aW9uIGlzIHN1Y2Nlc3NmdWwnLCAoKSA9PiB7XG5cdFx0XHRcblx0XHR9KVxuXHR9KVxufSkiXSwidmVyc2lvbiI6M30=