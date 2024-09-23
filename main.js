class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	print() {
		console.log(this.name, this.surname);
	}
}

class User extends Person {
	#password;

	constructor(name, surname, password) {
		super(name, surname);
		this.#password = password;
	}

	print(password) {
		if (password === this.#password) {
			super.print();
		} else {
			console.log('Неверный пароль!!!');
		}
	}
}

const user1 = new User('Ibrahim', 'Makambaev', '12345678');

user1.print('87654321');

user1.print('12345678');

