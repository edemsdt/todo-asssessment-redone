export default class {
  onCreate(input) {
    this.state = {
      allData: input.allData | []
    }
  }

  async onMount() {
    try {
      const data = await fetch('/api/tasks')
      this.state.allData = await data.json();
    } catch (err) {
      console.log(`Error fetching data: ${err}`)
    }
  }

  async handleDelete(event) {
    const id = event.target.id;

    if (!id) {
      console.error('No ID found for the todo item.');
      return;
    }

    const url = `/delete-task/${id}`; 
    console.log(url)

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Todo item deleted successfully');
        // Optionally update the state to remove the deleted item from the list
        this.state.allData = this.state.allData.filter(todo => todo._id !== id);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async handleCheckboxChange(event) {
    const id = event.target.id;
    const isChecked = event.target.checked;

    if (!id) {
      console.error('No ID found for the todo item.');
      return;
    }

    const url = `/patch-task/${id}`;
    const data = { checked: isChecked };

    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Todo item updated successfully');
        // Update the state to reflect the new checked status
        this.state.allData = this.state.allData.map(todo => {
          if (todo._id === id) {
            todo.checked = isChecked ? true : undefined;
          }
          return todo;
        });
        this.update()
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // goTo() {
  //   navigate('/addTask')
  // }
}