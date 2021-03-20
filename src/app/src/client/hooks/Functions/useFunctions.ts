const useFunctions = () => {
	const immediatelyInvoke = (callback) => {
		return (callback)();
	}

	return {
		immediatelyInvoke
	};
}

export default useFunctions;
