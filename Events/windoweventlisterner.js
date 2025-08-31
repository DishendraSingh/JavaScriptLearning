const   project = document.querySelector("#insert");
window.addEventListener("keydown",function(event){

    project.innerHTML = `
    <table border="1">
        <tr>
            <th>Key</th>    

            <th>Key Code</th>

            <th>Code</th>   
        </tr>   
        <tr>
            <td>${event.key}</td>

            <td>${event.keyCode}</td>   
            <td>${event.code}</td>

        </tr>
    </table>
    <br> `   ;

    console.log(event.key);
    console.log(event.keyCode);
    console.log(event.code);
    
})
