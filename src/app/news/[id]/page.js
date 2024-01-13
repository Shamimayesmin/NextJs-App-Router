

const newsId = ({params, searchParams}) => {
    return (
        <div>
            <h2>This is dynamic page .....{params.id}</h2>
        </div>
    );
};

export default newsId;