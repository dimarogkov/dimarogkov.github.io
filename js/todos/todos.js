let _functions = {};

$(document).ready(function() {

	_functions.addTodo = () => {
		let item = '<div class="todos-item"><div class="todos-col"><input class="task-input" type="text" name="task" placeholder="Write Task"></div><div class="todos-col"><div class="todo-priority-block"><span class="selected grey" data-name-priority="Clear"><i class="far fa-flag"></i></span><ul class="todo-priority-list"><li data-class="red" class="red"><i class="far fa-flag"></i> Urgent</li><li data-class="yellow" class="yellow"><i class="far fa-flag"></i> Hight</li><li data-class="blue" class="blue"><i class="far fa-flag"></i> Normal</li><li data-class="grey" class="grey"><i class="far fa-flag"></i> Clear</li></ul></div></div><div class="todos-col"><input class="time-input time-tracked" type="number" min="0" step="1" name="timeTracked" placeholder="hour"></div><div class="todos-col"><input class="time-input time-estimate" type="number" min="0" step="1" name="timeEstimate" placeholder="hour"></div><div class="todos-col"><div class="todo-time-posted" data-post-status="false"><input type="checkbox" name="timePost"><span></span></div><div class="todo-remove"><i class="fas fa-times"></i></div></div></div>';
		$('.todos-body').append(item);
	}

	_functions.removeTodo = (el) => {
		el.parent().parent().remove();
	}

	_functions.openLayer = () => {
		$('.todos-layer').addClass('active');
	}

	_functions.closeLayer = () => {
		$('.todos-layer').removeClass('active');
	}

	_functions.openPriority = (el) => {
		el.parent().find('.todo-priority-list').addClass('active');
	}

	_functions.closePriority = () => {
		$('.todo-priority-list').removeClass('active');
	}

	_functions.selectPriority = (el, elAttr) => {
		let name = el.text();

		name = name.replace(/ +/g, ' ').trim();
		el.closest('.todo-priority-block').find('.selected').removeClass('red yellow blue grey').addClass(elAttr).attr('data-name-priority', name);
		
		_functions.closeLayer();
		_functions.closePriority();
	}

	_functions.disabledTodoItem = (el) => {
		el.is(':checked') ? el.parent().attr('data-post-status', true).closest('.todos-item').addClass('disabled') : el.parent().attr('data-post-status', false).closest('.todos-item').removeClass('disabled');
	}

	_functions.setData = (item) => {
		let tasks = [];

		$('.todos-item').each(function() {
			let th = $(this);
				task = {
					id: th.index(),
					task_name: th.find('.task-input').val(),
					priority_is: th.find('.selected').attr('data-name-priority'),
					time_tracked: th.find('.time-tracked').val(),
					time_estimate: th.find('.time-estimate').val(),
					time_post: th.find('.todo-time-posted').attr('data-post-status')
				};

			tasks.push(task);
		});

		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	_functions.getData = () => {
		if (localStorage.getItem('tasks') !== null) {

			let data = JSON.parse(localStorage.getItem('tasks'));
			
			$('.todos-item:first').remove();

			data.forEach(item => {
				let id = item.id,
					task = item.task_name,
					priority = item.priority_is,
					timeTracked = item.time_tracked,
					timeEstimate = item.time_estimate,
					timePost = item.time_post,
					priorityClass,
					disabledClass,
					timePostStatus,
					localTodo;

				if (priority === 'Urgent') {
					priorityClass = 'red';
				} else if (priority === 'Hight') {
					priorityClass = 'yellow';
				} else if (priority === 'Normal') {
					priorityClass = 'blue';
				} else if (priority === 'Clear') {
					priorityClass = 'grey';
				}

				if (timePost === 'true') {
					disabledStatus = 'disabled';
					timePostStatus = 'checked'
				} else if (timePost === 'false'){
					disabledStatus = '';
					timePostStatus = '';
				}

				localTodo = '<div class="todos-item ' + disabledStatus + '"><div class="todos-col"><input class="task-input" type="text" name="task" placeholder="Write Task" value="' + task + '"></div><div class="todos-col"><div class="todo-priority-block"><span class="selected ' + priorityClass + '" data-name-priority="' + priority + '"><i class="far fa-flag"></i></span><ul class="todo-priority-list"><li data-class="red" class="red"><i class="far fa-flag"></i> Urgent</li><li data-class="yellow" class="yellow"><i class="far fa-flag"></i> Hight</li><li data-class="blue" class="blue"><i class="far fa-flag"></i> Normal</li><li data-class="grey" class="grey"><i class="far fa-flag"></i> Clear</li></ul></div></div><div class="todos-col"><input class="time-input time-tracked" type="number" min="0" step="1" name="timeTracked" placeholder="hour" value="' + timeTracked + '"></div><div class="todos-col"><input class="time-input time-estimate" type="number" min="0" step="1" name="timeEstimate" placeholder="hour" value="' + timeEstimate + '"></div><div class="todos-col"><div class="todo-time-posted" data-post-status="' + timePost +'"><input type="checkbox" name="timePost" '+ timePostStatus +'><span></span></div><div class="todo-remove"><i class="fas fa-times"></i></div></div></div>';
				$('.todos-body').append(localTodo);
			});
		}
	}

	$(document).on('click', '.todos-empty a', function(e){
		e.preventDefault();
		let th = $(this);

		_functions.addTodo();
		_functions.setData(th.closest('.todos-item'));
	});

	$(document).on('click', '.todo-remove', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.removeTodo(th);
		_functions.setData(th.closest('.todos-item'));
	});

	$(document).on('click', '.todos-layer', function(e) {
		e.preventDefault();
		_functions.closeLayer();
		_functions.closePriority();
	});

	$(document).on('click', '.selected', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.openLayer();
		_functions.openPriority(th);
	});

	$(document).on('click', '.todo-priority-list li', function(e) {
		e.preventDefault();
		let th = $(this),
			thAttr = th.attr('data-class');

		_functions.selectPriority(th, thAttr);
		_functions.setData(th.closest('.todos-item'));
	});

	$(document).on('change', '.todo-time-posted input', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.disabledTodoItem(th);
		_functions.setData(th.closest('.todos-item'));
	});
	
	$(document).on('keyup', '.task-input, .time-tracked, .time-estimate', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.setData(th.closest('.todos-item'));
	});

	_functions.getData();
});