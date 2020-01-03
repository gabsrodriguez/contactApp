import { stringify } from "querystring";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: (a, b, c, d) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: a,
						email: d,
						agenda_slug: "gabyAgenda",
						address: b,
						phone: c
					})
				});
			}
		}
	};
};

export default getState;
