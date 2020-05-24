"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
describe('User entity', () => {
    let user;
    beforeEach(() => {
        user = new user_entity_1.User();
        user.password = 'testPassword';
        user.salt = 'testSalt';
        bcrypt.hash;
    });
    describe('validatePassword', () => {
        it('returns true as password is valid', () => {
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIuZW50aXR5LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBb0M7QUFDcEMsbUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzVCLElBQUksSUFBVSxDQUFBO0lBRWQsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNmLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ1osQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1FBQ2pDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7UUFFN0MsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLmVudGl0eS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5kZXNjcmliZSgnVXNlciBlbnRpdHknLCAoKSA9PiB7XG5cdGxldCB1c2VyOiBVc2VyXG5cblx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0dXNlciA9IG5ldyBVc2VyKClcblx0XHR1c2VyLnBhc3N3b3JkID0gJ3Rlc3RQYXNzd29yZCdcblx0XHR1c2VyLnNhbHQgPSAndGVzdFNhbHQnXG5cdFx0YmNyeXB0Lmhhc2hcblx0fSlcblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlUGFzc3dvcmQnLCAoKSA9PiB7XG5cdFx0aXQoJ3JldHVybnMgdHJ1ZSBhcyBwYXNzd29yZCBpcyB2YWxpZCcsICgpID0+IHtcblxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==