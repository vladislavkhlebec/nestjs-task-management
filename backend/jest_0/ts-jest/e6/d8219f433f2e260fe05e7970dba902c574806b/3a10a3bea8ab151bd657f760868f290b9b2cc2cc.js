"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_repository_1 = require("./user.repository");
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUVsRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksY0FBYyxDQUFBO0lBRWxCLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1YsZ0NBQWM7YUFDZDtTQUNELENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVaLGNBQWMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQWlCLGdDQUFjLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLnJlcG9zaXRvcnkuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0IH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJ1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSdcblxuZGVzY3JpYmUoJ1VzZXJSZXBvc2l0b3J5JywgKCkgPT4ge1xuXHRsZXQgdXNlclJlcG9zaXRvcnlcblxuXHRiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBUZXN0LmNyZWF0ZVRlc3RpbmdNb2R1bGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFVzZXJSZXBvc2l0b3J5LFxuXHRcdFx0XSxcblx0XHR9KS5jb21waWxlKClcblxuXHRcdHVzZXJSZXBvc2l0b3J5ID0gYXdhaXQgbW9kdWxlLmdldDxVc2VyUmVwb3NpdG9yeT4oVXNlclJlcG9zaXRvcnkpXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==