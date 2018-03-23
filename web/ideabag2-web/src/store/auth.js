import instance from '../axios-auth';
import eventbus from '../eventbus';
import config from '../config';

const state = {
	userId: '',
	userEmail: '',
	token: '',
	isPerformingAction: false,
	userLoggedIn: false
};

const getters = {
	isPerformingAction: state => {
		return state.isPerformingAction;
	},
	userEmail: state => {
		return state.userEmail;
	},
	userLoggedIn: state => {
		return state.userLoggedIn;
	}
};

const mutations = {
	LOGIN_USER(state, loginData) {
		state.userId = loginData.idToken;
		state.userEmail = loginData.email;
		state.userLoggedIn = true;

		localStorage.setItem('loginData', loginData);
	},
	IS_LOGGING_IN(state, isPerformingAction) {
		state.isPerformingAction = isPerformingAction;
	},
	LOGOUT(state) {
		state.userLoggedIn = false;
		state.userEmail = '';
		state.token = '';

		localStorage.removeItem('loginData');
	}
};

const actions = {
	signUpUser(context, data) {
		data.returnSecureToken = true;

		console.log(data);
		instance
			.post(`/signupNewUser?key=${config.apiKey}`, data)
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error.response.error);
			});
	},
	loginUserLocal(context, loginData) {
		context.commit('LOGIN_USER', loginData);
	},
	loginUser(context, loginData) {
		context.dispatch('isPerformingAction', true);
		loginData.returnSecureToken = true;

		instance
			.post(`/verifyPassword?key=${config.apiKey}`, loginData)
			.then(res => {
				console.log(res);
				context.commit('LOGIN_USER', res.data);

				eventbus.$emit('login-success', 'Login successful');
				context.dispatch('isPerformingAction', false);
			})
			.catch(error => {
				eventbus.$emit('login-failure', error.response.data.error.message);
				context.dispatch('isPerformingAction', false);
			});
	},
	isPerformingAction(context, isPerformingAction) {
		context.commit('IS_LOGGING_IN', isPerformingAction);
	},
	logout(context) {
		context.commit('LOGOUT');
	},
	registerUser(context, loginData) {
		context.dispatch('isPerformingAction', true);
		loginData.returnSecureToken = true;

		instance
			.post(
				'/signupNewUser?key=AIzaSyCzIvIOojv9gOcQrLqFvRSd9naA-gzm6ck',
				loginData
			)
			.then(res => {
				console.log(res);
				context.commit('LOGIN_USER', res.data);

				eventbus.$emit('login-success', 'Login successful');
				context.dispatch('isPerformingAction', false);
			})
			.catch(error => {
				eventbus.$emit('login-failure', error.response.data.error.message);
				context.dispatch('isPerformingAction', false);
			});
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
