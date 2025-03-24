export const FormattedResponse = ({ response }: { response: string }) => {
  if (!response) return null;

  // Replace action delimiters with styled spans
  const formattedResponse = response
    .split(/(\[\[.*?\]\])/)
    .map((part, index) => {
      if (part.startsWith("[[") && part.endsWith("]]")) {
        // Extract the action text without the delimiters
        const actionText = part.slice(2, -2);
        return (
          <span
            key={index}
            className="italic font-medium bg-gray-100 text-gray-500 text-base px-2 py-0.5 rounded mx-1"
          >
            {actionText}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });

  return <>{formattedResponse}</>;
};
