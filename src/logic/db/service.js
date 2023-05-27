export async function getServices(){
    const services = await fetch('http://localhost:5000/services',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    
    return services 
}

