export default async function ValidateToken(context) {
	const { req: { session: { access_token: accessToken } } } = context;

	if (!accessToken) {
		return {
			redirect: {
				destination: '/admin/signin',
				permanent: false
			}
		};
	}

	const response = await fetch(
		`http://${ process.env.APP_CONTAINER_NAME }:${ process.env.BACKEND_PORT }/auth/validateToken`,
		{
			method: 'POST',
			body: JSON.stringify({ accessToken }),
			headers: {
				'Content-Type': 'application/json'
			}

		})
		.then(
			(res) => res.json(),
			(err) => console.log(err)
		);

	if (!response) {
		return {
			redirect: {
				destination: '/admin/signin',
				permanent: false
			}
		};
	}

	const { msg } = response;

	if (!msg || msg !== 'valid') {
		return {
			redirect: {
				destination: '/admin/signin',
				permanent: false
			}
		};
	}

	return {
		props: {
			token: accessToken
		}
	};
}
