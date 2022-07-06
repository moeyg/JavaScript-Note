let input = prompt('✅ What would you like to do?');
const todos = [];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('***********************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`📌 List No.${i} : ${todos[i]}`);
    }
    console.log('***********************');
  } else if (input === 'new') {
    const newTodo = prompt('📝 What is the new to do?');
    todos.push(newTodo);
    console.log(`📝 NEW TODO : ${newTodo}`);
  } else if (input === 'delete') {
    const deleteIndex = parseInt(prompt('🗑 Enter an index to delete'));
    if (!Number.isNaN) {
      const deletedTodo = todos.splice(deleteIndex, 1);
      console.log(`🗑 DELETE TODO : ${deletedTodo}`);
    } else {
      console.log('Unknown Index');
    }
  }

  input = prompt('What would you like to do?');
}
console.log('QUIT APP');
