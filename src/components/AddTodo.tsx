const AddTodo: React.FC = () => {
    return (
        <form className="flex flex-col items-center">
            <input
                type="text"
                name="todo"
                placeholder="What to do?"
                className="border-2 border-gray-500 rounded-lg p-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold rounded-lg p-2 mt-2"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
