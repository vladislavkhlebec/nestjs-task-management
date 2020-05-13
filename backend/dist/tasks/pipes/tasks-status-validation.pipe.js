"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusViladationPipe {
    constructor() {
        this.allowedStatuses = [
            task_status_enum_1.TaskStatus.OPEN,
            task_status_enum_1.TaskStatus.DONE,
            task_status_enum_1.TaskStatus.IN_PROGRESS,
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusViladationPipe = TaskStatusViladationPipe;
//# sourceMappingURL=tasks-status-validation.pipe.js.map