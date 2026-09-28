todos = []


def add_todo(title):
    todo = {
        "title": title,
        "completed": False,
    }

    todos.append(todo)
    return todo


def complete_todo(index):
    todos[index]["completed"] = True
    return todos[index]


def get_pending_todos():
    return [
        todo
        for todo in todos
        if todo["completed"] is False
    ]


def get_todo_count():
    return len(todos) + 1