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
            expect(result).toEqual('testHash');
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUNsRCwyQ0FBZ0Y7QUFDaEYsK0NBQW9DO0FBQ3BDLG1DQUFrQztBQUVsQyxNQUFNLGtCQUFrQixHQUFHLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUE7QUFFaEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLGNBQWMsQ0FBQTtJQUVsQixVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNWLGdDQUFjO2FBQ2Q7U0FDRCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFWixjQUFjLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFpQixnQ0FBYyxDQUFDLENBQUE7SUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQTtRQUVSLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ2hCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNqQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxD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LEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy9hdXRoL3VzZXIucmVwb3NpdG9yeS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QgfSBmcm9tICdAbmVzdGpzL3Rlc3RpbmcnXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5J1xuaW1wb3J0IHsgQ29uZmxpY3RFeGNlcHRpb24sIEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIuZW50aXR5J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xuXG5jb25zdCBtb2NrQ3JlZGVudGlhbHNEdG8gPSB7IHVzZXJuYW1lOiAnVGVzdFVzZXJuYW1lJywgcGFzc3dvcmQ6ICd0ZXN0UGFzc3dvcmQnfVxuXG5kZXNjcmliZSgnVXNlclJlcG9zaXRvcnknLCAoKSA9PiB7XG5cdGxldCB1c2VyUmVwb3NpdG9yeVxuXG5cdGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0VXNlclJlcG9zaXRvcnksXG5cdFx0XHRdLFxuXHRcdH0pLmNvbXBpbGUoKVxuXG5cdFx0dXNlclJlcG9zaXRvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0PFVzZXJSZXBvc2l0b3J5PihVc2VyUmVwb3NpdG9yeSlcblx0fSlcblxuXHRkZXNjcmliZSgnc2lnblVwJywgKCkgPT4ge1xuXHRcdGxldCBzYXZlXG5cblx0XHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHRcdHNhdmUgPSBqZXN0LmZuKClcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmNyZWF0ZSA9IGplc3QuZm4oKS5tb2NrUmV0dXJuVmFsdWUoeyBzYXZlIH0pXG5cdFx0fSlcblxuXHRcdGl0KCdzdWNjZXNzZnVsbHkgc2lnbnMgdXAgdGhlIHVzZXInLCAoKSA9PiB7XG5cdFx0XHRzYXZlLm1vY2tSZXNvbHZlZFZhbHVlKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVzb2x2ZXMubm90LnRvVGhyb3coKVxuXHRcdH0pXG5cblx0XHRpdCgndGhyb3dzIGEgY29uZmxpY3QgZXhjZXB0aW9uIGFzIHVzZXJuYW1lIGFscmVheSBleGlzdHMnLCAoKSA9PiB7XG5cdFx0XHRzYXZlLm1vY2tSZWplY3RlZFZhbHVlKHsgY29kZTogJzIzNTA1J30pXG5cdFx0XHRleHBlY3QodXNlclJlcG9zaXRvcnkuc2lnblVwKG1vY2tDcmVkZW50aWFsc0R0bykpLnJlamVjdHMudG9UaHJvdyhDb25mbGljdEV4Y2VwdGlvbilcblx0XHR9KVxuXG5cdFx0aXQoJ3Rocm93cyBhIGNvbmZsaWN0IGV4Y2VwdGlvbiBhcyB1c2VybmFtZSBhbHJlYXkgZXhpc3RzJywgKCkgPT4ge1xuXHRcdFx0c2F2ZS5tb2NrUmVqZWN0ZWRWYWx1ZSh7IGNvZGU6ICcyMzUwMTIzJ30pIC8vdW5oYW5kbGVkIGVycm9yIGNvZGVcblx0XHRcdGV4cGVjdCh1c2VyUmVwb3NpdG9yeS5zaWduVXAobW9ja0NyZWRlbnRpYWxzRHRvKSkucmVqZWN0cy50b1Rocm93KEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24pXG5cdFx0fSlcblx0fSlcblxuXHRkZXNjcmliZSgndmFsaWRhdGVVc2VyUGFzc3dvcmQnLCAoKSA9PiB7XG5cdFx0bGV0IHVzZXJcblxuXHRcdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFx0dXNlclJlcG9zaXRvcnkuZmluZE9uZSA9IGplc3QuZm4oKVxuXHRcdFx0dXNlciA9IG5ldyBVc2VyKClcblx0XHRcdHVzZXIudXNlcm5hbWUgPSAnVGVzdFVzZXJuYW1lJ1xuXHRcdFx0dXNlci52YWxpZGF0ZVBhc3N3b3JkID0gamVzdC5mbigpXG5cdFx0fSlcblxuXHRcdGl0KCdyZXR1cm5zIHRoZSB1c2VybmFtZSBhcyB2YWxpZGF0aW9uIGlzIHN1Y2Nlc3NmdWwnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lLm1vY2tSZXNvbHZlZFZhbHVlKHVzZXIpXG5cdFx0XHR1c2VyLnZhbGlkYXRlUGFzc3dvcmQubW9ja1Jlc29sdmVkVmFsdWUodHJ1ZSlcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlclJlcG9zaXRvcnkudmFsaWRhdGVVc2VyUGFzc3dvcmQobW9ja0NyZWRlbnRpYWxzRHRvKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgnVGVzdFVzZXJuYW1lJylcblx0XHR9KVxuXG5cdFx0aXQoJ3JldHVybnMgbnVsbCBhcyB1c2VyIGNhbm5vdCBiZSBmb3VuZCcsIGFzeW5jICgpID0+IHtcblx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUubW9ja1Jlc29sdmVkVmFsdWUobnVsbClcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnZhbGlkYXRlVXNlclBhc3N3b3JkKG1vY2tDcmVkZW50aWFsc0R0bylcblx0XHRcdGV4cGVjdCh1c2VyLnZhbGlkYXRlUGFzc3dvcmQpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvQmVOdWxsKClcblx0XHR9KVxuXG5cdFx0aXQoJ3JldHVybnMgbnVsbCBhcyBwYXNzd29yZCBpcyBpbnZhbGlkJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dXNlclJlcG9zaXRvcnkuZmluZE9uZS5tb2NrUmVzb2x2ZWRWYWx1ZSh1c2VyKVxuXHRcdFx0dXNlci52YWxpZGF0ZVBhc3N3b3JkLm1vY2tSZXNvbHZlZFZhbHVlKGZhbHNlKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlclJlcG9zaXRvcnkudmFsaWRhdGVVc2VyUGFzc3dvcmQobW9ja0NyZWRlbnRpYWxzRHRvKVxuXHRcdFx0ZXhwZWN0KHVzZXIudmFsaWRhdGVQYXNzd29yZCkudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRleHBlY3QocmVzdWx0KS50b0JlTnVsbCgpXG5cdFx0fSlcblx0fSlcblxuXHRkZXNjcmliZSgnaGFzaFBhc3N3b3JkJywgKCkgPT4ge1xuXHRcdGl0KCdjYWxscyBiY3J5cHQuaGFzaCB0byBnZW5lcmF0ZSBhIGhhc2gnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRiY3J5cHQuaGFzaCA9IGplc3QuZm4oKS5tb2NrUmVzb2x2ZWRWYWx1ZSgndGVzdEhhc2gnKVxuXHRcdFx0ZXhwZWN0KGJjcnlwdC5oYXNoKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5oYXNoUGFzc3dvcmQoJ3Rlc3RQYXNzd29yZCcsICd0ZXN0U2FsdCcpXG5cdFx0XHRleHBlY3QoYmNyeXB0Lmhhc2gpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd0ZXN0UGFzc3dvcmQnLCAndGVzdFNhbHQnKVxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG9FcXVhbCgndGVzdEhhc2gnKVxuXHRcdH0pXG5cdH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==