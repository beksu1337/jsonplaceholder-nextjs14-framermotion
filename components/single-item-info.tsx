export const SingleItemInfo = ({ data }: { data: [string, any][] }) => {
	return (
		<div className="container border-r border-l gap-4 justify-center flex flex-col items-start h-[calc(100vh_-_70px)]">
			{data.map(([key, value], i) => (
				<div key={i}>
					<span className="font-bold text-red-500">{key} - </span>
					{JSON.stringify(value)}
				</div>
			))}
		</div>
	);
};
