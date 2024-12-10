const API_BASE = 'http://127.0.0.1:5000/api';

const routes = {
    '/': listUsers,
    '/user': showUser
};

async function router() {
    const path = window.location.hash.slice(1) || '/';
    const [route, param] = path.split('/');
    const page = routes[`/${route || ''}`];
    if (page) await page(param);

    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = path === '' || path === '/' ? 'block' : 'none';
}

async function listUsers(searchTerm = '') {
    const url = searchTerm
        ? `${API_BASE}/users?search=${searchTerm}`
        : `${API_BASE}/users`;

    const users = await fetch(url).then(r => r.json());

    document.getElementById('content').innerHTML = `
               <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
                   ${users.map(user => `
                       <div class="p-4 bg-white rounded shadow">
                           <h2 class="font-bold">${user.name}</h2>
                           <p class="text-gray-600">Age: ${user.age}</p>
                           <a href="#user/${user.id}"
                              class="text-blue-500 hover:underline">
                               View Details
                           </a>
                       </div>
                   `).join('')}
               </div>
           `;
}

async function showUser(id) {
    const user = await fetch(`${API_BASE}/users/${id}`)
        .then(r => r.json());

    document.getElementById('content').innerHTML = `
               <div class="max-w-md mx-auto bg-white p-6 rounded shadow">
                   <a href="#" class="text-blue-500 hover:underline">← Back</a>
                   <h2 class="text-2xl font-bold mt-4">${user.name}</h2>
                   <p class="text-gray-600">Age: ${user.age}</p>
               </div>
           `;
}

window.handleSearch = async (event) => {
    if (event.key === 'Enter' || event.target.value === '') {
        await listUsers(event.target.value);
    }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);