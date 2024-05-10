import AddTodo from "@/components/AddTodo"

const Home: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <div className="border-2 border-gray-500 rounded-lg p-4 flex flex-col items-center">
                <h1 className="text-4xl font-bold m-4">Todo App</h1>
                <AddTodo />
            </div>
        </main>
    )
}

export default Home
