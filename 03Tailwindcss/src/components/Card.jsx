function Card(props) {
    console.log("props", props);
    
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black-400 shadow-lg-2xl ">
                <img src="https://images.pexels.com/photos/16171084/pexels-photo-16171084/free-photo-of-otter-lying-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="random" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">Photo by John Doe</div>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            4000
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            300
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            400
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
                </div>
            </div>
        </>
    )
}

export default Card