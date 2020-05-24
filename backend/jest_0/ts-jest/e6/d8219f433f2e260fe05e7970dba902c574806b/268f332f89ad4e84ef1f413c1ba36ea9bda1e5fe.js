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
            expect(userRepository.signUp(mockCredentialsDto)).rejects.toThrow(common_1.InternalServerErrorException);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFFaEYsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFBO0FBRWhGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxjQUFjLENBQUE7SUFFbEIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFNBQVMsRUFBRTtnQkFDVixnQ0FBYzthQUNkO1NBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRVosY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBaUIsZ0NBQWMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUE7UUFFUixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtZQUNoQixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDekUsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1lBQ3hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFDQUE0QixDQUFDLENBQUE7UUFDaEcsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLnJlcG9zaXRvcnkuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcbmltcG9ydCB7IENvbmZsaWN0RXhjZXB0aW9uLCBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5cbmNvbnN0IG1vY2tDcmVkZW50aWFsc0R0byA9IHsgdXNlcm5hbWU6ICdUZXN0VXNlcm5hbWUnLCBwYXNzd29yZDogJ3Rlc3RQYXNzd29yZCd9XG5cbmRlc2NyaWJlKCdVc2VyUmVwb3NpdG9yeScsICgpID0+IHtcblx0bGV0IHVzZXJSZXBvc2l0b3J5XG5cblx0YmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHRVc2VyUmVwb3NpdG9yeSxcblx0XHRcdF0sXG5cdFx0fSkuY29tcGlsZSgpXG5cblx0XHR1c2VyUmVwb3NpdG9yeSA9IGF3YWl0IG1vZHVsZS5nZXQ8VXNlclJlcG9zaXRvcnk+KFVzZXJSZXBvc2l0b3J5KVxuXHR9KVxuXG5cdGRlc2NyaWJlKCdzaWduVXAnLCAoKSA9PiB7XG5cdFx0bGV0IHNhdmVcblxuXHRcdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFx0c2F2ZSA9IGplc3QuZm4oKVxuXHRcdFx0dXNlclJlcG9zaXRvcnkuY3JlYXRlID0gamVzdC5mbigpLm1vY2tSZXR1cm5WYWx1ZSh7IHNhdmUgfSlcblx0XHR9KVxuXG5cdFx0aXQoJ3N1Y2Nlc3NmdWxseSBzaWducyB1cCB0aGUgdXNlcicsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1Jlc29sdmVkVmFsdWUodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHVzZXJSZXBvc2l0b3J5LnNpZ25VcChtb2NrQ3JlZGVudGlhbHNEdG8pKS5yZXNvbHZlcy5ub3QudG9UaHJvdygpXG5cdFx0fSlcblxuXHRcdGl0KCd0aHJvd3MgYSBjb25mbGljdCBleGNlcHRpb24gYXMgdXNlcm5hbWUgYWxyZWF5IGV4aXN0cycsICgpID0+IHtcblx0XHRcdHNhdmUubW9ja1JlamVjdGVkVmFsdWUoeyBjb2RlOiAnMjM1MDUnfSlcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVqZWN0cy50b1Rocm93KEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24pXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9