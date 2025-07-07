export const SocialButton = ({ href, icon: Icon, text }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg border border-gray-600"
    >
        <Icon />
        {text}
    </a>
);
