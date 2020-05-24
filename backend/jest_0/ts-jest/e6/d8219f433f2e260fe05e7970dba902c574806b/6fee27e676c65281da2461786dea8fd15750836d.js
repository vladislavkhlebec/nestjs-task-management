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
        bcrypt.hash = jest.fn();
    });
    describe('validatePassword', () => {
        it('returns true as password is valid', async () => {
            bcrypt.hash.mockReturnValue('testPassword');
            expect(bcrypt.hash).not.toHaveBeenCalled();
            const result = await user.validatePassword('123456');
            expect(bcrypt.hash).toHaveBeenCalledWith('123456', 'testSalt');
            expect(result).toEqual(true);
        });
        it('returns false as password is invalid', async () => {
            bcrypt.hash.mockReturnValue('wrongPassword');
            expect(bcrypt.hash).not.toHaveBeenCalled();
            const result = await user.validatePassword('wrongPassword');
            expect(bcrypt.hash).toHaveBeenCalledWith('wrongPassword', 'testSalt');
            expect(result).toEqual(false);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIuZW50aXR5LnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBb0M7QUFDcEMsbUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzVCLElBQUksSUFBVSxDQUFBO0lBRWQsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNmLElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtRQUN0QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7UUFDakMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQzNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2hlcm9rdS9Qcm9qZWN0cy9TdHVkeWluZy9OZXN0SlMvbmVzdGpzLXRhc2stbWFuYWdlbWVuZXQvYmFja2VuZC9zcmMvYXV0aC91c2VyLmVudGl0eS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5kZXNjcmliZSgnVXNlciBlbnRpdHknLCAoKSA9PiB7XG5cdGxldCB1c2VyOiBVc2VyXG5cblx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0dXNlciA9IG5ldyBVc2VyKClcblx0XHR1c2VyLnBhc3N3b3JkID0gJ3Rlc3RQYXNzd29yZCdcblx0XHR1c2VyLnNhbHQgPSAndGVzdFNhbHQnXG5cdFx0YmNyeXB0Lmhhc2ggPSBqZXN0LmZuKClcblx0fSlcblx0ZGVzY3JpYmUoJ3ZhbGlkYXRlUGFzc3dvcmQnLCAoKSA9PiB7XG5cdFx0aXQoJ3JldHVybnMgdHJ1ZSBhcyBwYXNzd29yZCBpcyB2YWxpZCcsIGFzeW5jICgpID0+IHtcblx0XHRcdGJjcnlwdC5oYXNoLm1vY2tSZXR1cm5WYWx1ZSgndGVzdFBhc3N3b3JkJylcblx0XHRcdGV4cGVjdChiY3J5cHQuaGFzaCkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlci52YWxpZGF0ZVBhc3N3b3JkKCcxMjM0NTYnKVxuXHRcdFx0ZXhwZWN0KGJjcnlwdC5oYXNoKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnMTIzNDU2JywgJ3Rlc3RTYWx0Jylcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwodHJ1ZSlcblx0XHR9KVxuXG5cdFx0aXQoJ3JldHVybnMgZmFsc2UgYXMgcGFzc3dvcmQgaXMgaW52YWxpZCcsIGFzeW5jICgpID0+IHtcblx0XHRcdGJjcnlwdC5oYXNoLm1vY2tSZXR1cm5WYWx1ZSgnd3JvbmdQYXNzd29yZCcpXG5cdFx0XHRleHBlY3QoYmNyeXB0Lmhhc2gpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXIudmFsaWRhdGVQYXNzd29yZCgnd3JvbmdQYXNzd29yZCcpXG5cdFx0XHRleHBlY3QoYmNyeXB0Lmhhc2gpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd3cm9uZ1Bhc3N3b3JkJywgJ3Rlc3RTYWx0Jylcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZmFsc2UpXG5cdFx0fSlcblx0fSlcbn0pIl0sInZlcnNpb24iOjN9