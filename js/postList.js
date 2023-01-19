// Obtiene los datos del archivo JSON
fetch('posts.json')
.then(response => response.json())
.then(data => {
    // Selecciona el div donde se van a mostrar los post
    let postList = document.getElementById("post-list");
    // Recorre el arreglo de post
    for (let i = 0; i < 5; i++) {
        let post = data[i];
        // Crea un nuevo div para cada post
        let postDiv = document.createElement("div");
        // Crea una etiqueta h2 para el título del post
        let postTitle = document.createElement("h2");
        postTitle.innerHTML = post.title;
        postDiv.appendChild(postTitle);
        // Crea una etiqueta span para la fecha de publicación del post
        let postDate = document.createElement("span");
        postDate.innerHTML = post.date;
        postDiv.appendChild(postDate);
        // Crea una etiqueta p para el contenido del post
        let postContent = document.createElement("p");
        postContent.innerHTML = post.content;
        postDiv.appendChild(postContent);
        // Agrega el div del post al div principal
        postList.appendChild(postDiv);
    }
});
