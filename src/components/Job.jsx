export const Job = ({name, company, period, description}) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-semibold text-purple-400">{name}</h3>
                    <p className="text-gray-400">{company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">{period}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
                {description}
            </p>
        </div>
    )
}