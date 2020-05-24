"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const task_status_enum_1 = require("./task-status.enum");
const user_entity_1 = require("../auth/user.entity");
let Task = class Task extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.tasks, { eager: false }),
    __metadata("design:type", user_entity_1.User)
], Task.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Task.prototype, "userId", void 0);
Task = __decorate([
    typeorm_1.Entity()
], Task);
exports.Task = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLmVudGl0eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF1RjtBQUN2Rix5REFBK0M7QUFDL0MscURBQTBDO0FBRzFDLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUssU0FBUSxvQkFBVTtDQXNCbkMsQ0FBQTtBQXBCQTtJQURDLGdDQUFzQixFQUFFOztnQ0FDZjtBQUdWO0lBREMsZ0JBQU0sRUFBRTs7bUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3lDQUNVO0FBR25CO0lBREMsZ0JBQU0sRUFBRTs7b0NBQ1M7QUFPbEI7SUFMQyxtQkFBUyxDQUNULElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQUksRUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ25CLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUNoQjs4QkFDSyxrQkFBSTtrQ0FBQTtBQUdWO0lBREMsZ0JBQU0sRUFBRTs7b0NBQ0s7QUFyQkYsSUFBSTtJQURoQixnQkFBTSxFQUFFO0dBQ0ksSUFBSSxDQXNCaEI7QUF0Qlksb0JBQUkiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvaGVyb2t1L1Byb2plY3RzL1N0dWR5aW5nL05lc3RKUy9uZXN0anMtdGFzay1tYW5hZ2VtZW5ldC9iYWNrZW5kL3NyYy90YXNrcy90YXNrLmVudGl0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSdcbmltcG9ydCB7IFRhc2tTdGF0dXMgfSBmcm9tICcuL3Rhc2stc3RhdHVzLmVudW0nXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vYXV0aC91c2VyLmVudGl0eSdcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIEJhc2VFbnRpdHkge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdGlkOiBudW1iZXJcblxuXHRAQ29sdW1uKClcblx0dGl0bGU6IHN0cmluZ1xuXG5cdEBDb2x1bW4oKVxuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cblx0QENvbHVtbigpXG5cdHN0YXR1czogVGFza1N0YXR1c1xuXG5cdEBNYW55VG9PbmUoXG5cdFx0dHlwZSA9PiBVc2VyLFxuXHRcdCB1c2VyID0+IHVzZXIudGFza3MsXG5cdFx0eyBlYWdlcjogZmFsc2UgfVxuXHQpXG5cdHVzZXI6IFVzZXJcblxuXHRAQ29sdW1uKClcblx0dXNlcklkOiBudW1iZXJcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==