### Undo/Redo ToDo List - 19.12

**Day 13 - 19.12.2023**

## Description

Create a todo list app, where you can add and remove items. In addition to these 2 basic operations you need to implement and "Undo" and "Redo" buttons

## Requirements

Create a todo list app, where you can add and remove items. In addition to these 2 basic operations you need to implement and "Undo" and "Redo" buttons

"Undo" - active only when a change has occurred, can be clicked any number of times until we're back at the initial state at least, goes one change backwards at time
"Redo" - active only when "Undo" was clicked, can be clicked any number of times until we're back at the latest state and changes, goes one change forwards at time

- If You want You can extend the app and make so, that the state doesn't get lost after every reload

## Hints

- keep an eye when you "Undo" all elemements and then add a new one - is the old state still there? The thread must be brand new
- keep an eye when you "Undo" all elements (at least 2), then make one "Redo" and add an element - is the old state still there? Once more we need a new thread

![](assets/example.gif)
