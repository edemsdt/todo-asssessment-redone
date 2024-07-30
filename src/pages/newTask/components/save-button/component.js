export default class {
    onCreate() {
        this.state = {
            newTask: ''
        }
    }

    handleInput(event) {
        this.state.newTask = event.target.value;
    }

    async handleClick() {
        if (!this.state.newTask) {
            throw new Error('Value must not be empty')
        }
        const data = { task: this.state.newTask };
        console.log(data)

        try {
            const response = await fetch('/save-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            
            const saveResult = await response.json();
            console.log(`Success: ${saveResult}`);
            // Redirect to the homepage
            window.location.href = '/';
        } catch (err) {
            console.log(`Error saving data: ${err}`)
        }
         
    }
}