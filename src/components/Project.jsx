import { COLORMAP } from "../data/colors";

export const Project = ({name, description, tecnologies = [], badgeColors = [], primaryColor = "purple", img}) => {
    const primaryColors = COLORMAP[primaryColor] || COLORMAP.purple;
    
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <div 
                className="h-60 bg-gradient-to-br rounded-lg mb-4 flex items-center justify-center"
                style={{
                    background: `linear-gradient(to bottom right, ${primaryColors.bg}, ${primaryColors.bgLight})`
                }}
            >
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: primaryColors.bg }}
            >
                {name}
            </h3>
            <p 
                className="text-gray-400 text-sm mb-4"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.5'
                }}
            >
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {
                    tecnologies.map((tech, index) => {
                        const badgeColor = badgeColors[index] || primaryColor;
                        const colors = COLORMAP[badgeColor] || COLORMAP.purple;
                        
                        return (
                            <span 
                                key={index}
                                className="px-2 py-1 rounded text-xs"
                                style={{
                                    backgroundColor: `${colors.bg}33`,
                                    color: colors.text
                                }}
                            >
                                {tech}
                            </span>
                        );
                    })
                }
            </div>
            <div className="flex gap-2">
                <button 
                    className="flex-1 transition-colors px-4 py-2 rounded-lg text-sm"
                    style={{
                        backgroundColor: primaryColors.bg,
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = primaryColors.bgLight}
                    onMouseLeave={(e) => e.target.style.backgroundColor = primaryColors.bg}
                >
                    Ver Demo
                </button>
                <button 
                    className="px-4 py-2 border border-gray-600 transition-colors rounded-lg text-sm"
                    style={{
                        borderColor: primaryColors.bg
                    }}
                    onMouseEnter={(e) => e.target.style.borderColor = primaryColors.bg}
                    onMouseLeave={(e) => e.target.style.borderColor = '#4b5563'}
                >
                    GitHub
                </button>
            </div>
        </div>
    );
};

