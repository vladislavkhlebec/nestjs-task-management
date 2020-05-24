import {
	Body,
	Controller,
	Delete,
	Get, Logger,
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
import { User } from '../auth/user.entity'
import { GetUser } from '../auth/get-user.decorator'

@Controller('/tasks')
@UseGuards(AuthGuard())
export class TasksController {
	private logger = new Logger('TaskController')
	constructor(private tasksService: TasksService) {}

	@Get()
	getTasks(
		@Query(ValidationPipe) filterDto: GetTasksFilterDto,
		@GetUser() user: User
	): Promise<Task[]> {
		this.logger.verbose(`User"${user.username}" retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`)
		return this.tasksService.getTasks(filterDto, user)
	}

	@Get('/:id')
	getTaskById(
		@Param('id', ParseIntPipe) id: number,
		@GetUser() user: User,
	): Promise<Task> {
		return this.tasksService.getTaskById(id, user)
	}
	//
	@Post()
	@UsePipes(ValidationPipe)
	createTask(@Body() createTaskDto: CreateTaskDto, @GetUser() user: User): Promise<Task> {
		this.logger.verbose(`User: "${user.username}" creating a new task. Data: ${createTaskDto}`)
		return this.tasksService.createTask(createTaskDto, user)
	}

	@Delete('/:id')
	deleteTask(
		@Param('id', ParseIntPipe) id: number,
		@GetUser() user: User,
	): Promise<void> {
		return this.tasksService.deleteTask(id, user)
	}

	@Patch('/:id/status')
	updateTaskStatus(
		@Param('id') id: number,
		@Body('status', TaskStatusViladationPipe) status: TaskStatus,
		@GetUser() user: User,
	): Promise<Task> {
		return this.tasksService.updateTaskStatus(id, status, user)
	}
}