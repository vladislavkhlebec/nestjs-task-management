import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Query, UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { TaskStatusViladationPipe } from './pipes/tasks-status-validation.pipe'
import { Task } from './task.entity'
import { TaskStatus } from './task-status.enum'

@Controller('/tasks')
@UseGuards(AuthGuard())
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
		return this.tasksService.getTasks(filterDto)
	}

	@Get('/:id')
	getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
		return this.tasksService.getTaskById(id)
	}
	//
	@Post()
	@UsePipes(ValidationPipe)
	createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		return this.tasksService.createTask(createTaskDto)
	}

	@Delete('/:id')
	deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.tasksService.deleteTask(id)
	}

	@Patch('/:id/status')
	updateTaskStatus(
		@Param('id') id: number,
		@Body('status', TaskStatusViladationPipe) status: TaskStatus
	): Promise<Task> {
		return this.tasksService.updateTaskStatus(id, status)
	}
}
