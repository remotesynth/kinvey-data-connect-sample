var client = Kinvey.init({
    appKey: 'kid_rJf4EsJ8f',
    appSecret: 'cf8e49769b83466db5b34f6ce1a83b77'
});
const employeeTemplate = templater`<div class="teamMate">
    <img src="images/${'Photo'}" alt="${'Name'}">
    <div class="details">
        <h2>${'Name'}</h2>
        <p>Founder: ${'Founder'}<br>Status: ${'Status'}</p>
    </div>
</div>`;

// modified via https://css-tricks.com/template-literals/
function templater(strings, ...keys) {
    return function(data) {
        let temp = strings.slice(),
            thisItem = '';
        keys.forEach((key, i) => {
            // tweaked this to display the boolean as yes/no rather than 1/0
            thisItem = data[key];
            if (thisItem === 1) {
                thisItem = 'Yes';
            }
            else if (thisItem === 0) {
                thisItem = 'No';
            }
            temp[i] = temp[i] + thisItem;
        });
        return temp.join('');
    }
};

var promise = Kinvey.User.logout()
.then(function () {
    console.log('logged out');
    var user = new Kinvey.User();
    var promise = user.login({
        username: 'webapp',
        password: 'password'
    })
    .then(function(user) {
        console.log('logged in');
        getData();
    })
    .catch(function(error) {
        console.log(error);
    });
})
.catch(function(error) {
    console.log(error);
});

function getData() {
    var employees_ds = Kinvey.DataStore.collection('Employees'),
        query = new Kinvey.Query(),
        stream;

    query.descending('Founder');
    query.ascending('Name');
    stream = employees_ds.find(query);
    stream.subscribe(
        (employees) => {
            console.log("data retrieved");
            var wrapper = document.getElementById('wrapper');
            wrapper.innerHTML = '';
            employees.forEach((employee) => {
                wrapper.innerHTML += employeeTemplate(employee);
            });
        },
        (error) => {
            console.log(error);
        },
        () => {
            // do nothing
        }
    );
}