function CardPage(){
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
            <img className="w-full h-48 object-cover" src="image.jpg" alt="Card Image"/>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">Card Title</h2>
                <p className="mt-2 text-gray-600">This is a description of the card content. It's brief but
                    informative.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Action</button>
            </div>
        </div>
    )
}

export default CardPage;