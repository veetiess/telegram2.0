// const form = document.getElementById('commentForm');
// const commentInput = document.getElementById('commentInput');
// const commentsDiv = document.getElementById('comments');

// // Функция для загрузки комментариев
// function loadComments() {
//     fetch('/comments')
//         .then(response => response.json())
//         .then(data => {
//             commentsDiv.innerHTML = '';
//             data.forEach(comment => {
//                 const div = document.createElement('div');
//                 div.classList.add('comment');
//                 div.textContent = comment;
//                 commentsDiv.appendChild(div);
//             });
//         });
// }

// // Обработка отправки комментария
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const comment = commentInput.value;

//     fetch('/comments', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ comment }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         commentInput.value = '';
//         loadComments(); // Перезагрузить комментарии
//     });
// });

// // Загрузить комментарии при загрузке страницы
// loadComments();