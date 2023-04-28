(() => {
	// No aplicando el principio de responsabilidad única
	type Gender = "M" | "F";

	interface PersonProps {
		name: string;
		gender: Gender;
		birthdate: Date;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;
		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		name: string;
		role: string;
	}

	class User extends Person {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ birthdate, email, gender, name, role }: UserProps) {
			super({ name, gender, birthdate });
			this.email = email;
			this.lastAccess = new Date();
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		lastOpenFolder: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;
		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthdate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date("1985-10-21"),
		email: "santiago@google.com",
		gender: "M",
		lastOpenFolder: "/home",
		name: "Santiago",
		role: "Admin",
		workingDirectory: "/usr/home",
	});
	console.log({ userSettings });
})();
