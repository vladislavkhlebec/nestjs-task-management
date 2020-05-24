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
        it('successfully signs up the user', async () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUVsRCxNQUFNLGtCQUFrQixHQUFHLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUE7QUFFaEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2FBQ2Q7U0FDRCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFWixjQUFjLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN2QixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFaEQsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLnJlcG9zaXRvcnkuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcblxuY29uc3QgbW9ja0NyZWRlbnRpYWxzRHJvID0geyB1c2VybmFtZTogJ1Rlc3RVc2VybmFtZScsIHBhc3N3b3JkOiAndGVzdFBhc3N3b3JkJ31cblxuZGVzY3JpYmUoJ1VzZXJSZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFVzZXJSZXBvc2l0b3J5LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG5cblx0ZGVzY3JpYmUoJ3NpZ25VcCcsICgpID0+IHtcblx0XHRpdCgnc3VjY2Vzc2Z1bGx5IHNpZ25zIHVwIHRoZSB1c2VyJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9