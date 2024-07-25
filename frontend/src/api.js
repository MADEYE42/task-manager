

export const CreateTask = async (taskObj)=>{
    const url = `http://localhost:3000/tasks`;
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(taskObj)
    };
    try {
        const result = await fetch(url,options);
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
}