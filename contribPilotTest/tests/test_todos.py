import pytest

from app.todos import (
    add_todo,
    complete_todo,
    get_pending_todos,
    get_todo_count,
    todos,
)


@pytest.fixture(autouse=True)
def reset_todos():
    todos.clear()
    yield
    todos.clear()


def test_add_todo():
    todo = add_todo("Learn Python")

    assert todo["title"] == "Learn Python"
    assert todo["completed"] is False


def test_complete_todo():
    add_todo("Learn Git")

    todo = complete_todo(0)

    assert todo["completed"] is True


def test_pending_todos():
    add_todo("Task 1")
    add_todo("Task 2")

    complete_todo(0)

    pending = get_pending_todos()

    assert len(pending) == 1
    assert pending[0]["title"] == "Task 2"


def test_todo_count():
    add_todo("Task 1")
    add_todo("Task 2")
    add_todo("Task 3")

    assert get_todo_count() == 3